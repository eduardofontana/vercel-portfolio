const allowedExternalProtocols = new Set(["https:"]);

export function getSafeExternalUrl(url: string): string | null {
  try {
    const parsed = new URL(url);
    return allowedExternalProtocols.has(parsed.protocol) ? parsed.toString() : null;
  } catch {
    return null;
  }
}
