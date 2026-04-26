import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const isDevelopment = process.env.NODE_ENV !== "production";

function shouldRejectRequest(request: NextRequest) {
  const transferEncoding = request.headers.get("transfer-encoding");
  const contentLength = request.headers.get("content-length");

  if (!transferEncoding) {
    return false;
  }

  if (contentLength) {
    return true;
  }

  const normalizedTransferEncoding = transferEncoding.trim().toLowerCase();
  if (normalizedTransferEncoding !== "chunked") {
    return true;
  }

  if (normalizedTransferEncoding.includes(",") || /[\r\n\t]/.test(transferEncoding)) {
    return true;
  }

  return false;
}

export function proxy(request: NextRequest) {
  if (shouldRejectRequest(request)) {
    return new NextResponse("Bad Request", {
      status: 400,
      headers: {
        "Cache-Control": "no-store",
      },
    });
  }

  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");

  const contentSecurityPolicy = [
    "default-src 'self'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    "object-src 'none'",
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic'${isDevelopment ? " 'unsafe-eval'" : ""}`,
    `style-src 'self' ${isDevelopment ? "'unsafe-inline'" : `'nonce-${nonce}'`}`,
    "img-src 'self' data: blob:",
    "font-src 'self' data:",
    "connect-src 'self'",
    "frame-src 'none'",
    "manifest-src 'self'",
    "media-src 'self'",
    "worker-src 'self' blob:",
    "upgrade-insecure-requests",
  ]
    .join("; ")
    .replace(/\s{2,}/g, " ")
    .trim();

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);
  requestHeaders.set("Content-Security-Policy", contentSecurityPolicy);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  response.headers.set("Content-Security-Policy", contentSecurityPolicy);

  return response;
}

export const config = {
  matcher: [
    {
      source: "/((?!_next/static|_next/image|favicon.ico).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};
