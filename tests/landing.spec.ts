import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

for (const width of [360, 390, 768, 1440]) {
  test(`layout, recursos e acessibilidade em ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 1000 });
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("console", (message) => {
      if (message.type() === "error") errors.push(message.text());
    });
    await page.addInitScript(() => {
      (window as unknown as { cspErrors: string[] }).cspErrors = [];
      document.addEventListener("securitypolicyviolation", (event) => {
        (window as unknown as { cspErrors: string[] }).cspErrors.push(
          event.violatedDirective,
        );
      });
    });
    await page.goto("/");
    await page.evaluate(() => document.fonts.ready);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      "EduardoFontana.",
    );
    await expect(page.locator(".project")).toHaveCount(3);
    for (const image of await page.locator(".project-image img").all()) {
      await image.scrollIntoViewIfNeeded();
      await expect(image).toBeVisible();
      await expect
        .poll(() =>
          image.evaluate(
            (el: HTMLImageElement) => el.complete && el.naturalWidth > 0,
          ),
        )
        .toBe(true);
    }
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
    const overflow = await page.locator("main *").evaluateAll((elements) =>
      elements
        .filter((el) => {
          const box = el.getBoundingClientRect();
          return box.width > 0 && (box.left < -1 || box.right > innerWidth + 1);
        })
        .map((el) => `${el.tagName}.${el.className}`),
    );
    expect(overflow).toEqual([]);
    expect(
      (
        await new AxeBuilder({ page })
          .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
          .analyze()
      ).violations,
    ).toEqual([]);
    expect(errors).toEqual([]);
    expect(
      await page.evaluate(
        () => (window as unknown as { cspErrors: string[] }).cspErrors,
      ),
    ).toEqual([]);
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
    await page.screenshot({
      path: `.qa/landing-${width}.png`,
      fullPage: true,
      animations: "disabled",
    });
  });
}

test("menu móvel mantém foco, fecha por Escape e navega até a seção", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const trigger = page.getByRole("button", { name: "Menu", exact: false });
  await trigger.click();
  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();
  await expect(page.getByRole("button", { name: "Fechar menu" })).toBeFocused();
  for (let i = 0; i < 7; i++) {
    await page.keyboard.press("Tab");
    expect(
      await dialog.evaluate((el) => el.contains(document.activeElement)),
    ).toBe(true);
  }
  expect(
    (
      await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
        .analyze()
    ).violations,
  ).toEqual([]);
  await page.keyboard.press("Escape");
  await expect(dialog).not.toBeVisible();
  await expect(trigger).toBeFocused();
  await trigger.click();
  await dialog.getByRole("link", { name: "Projetos" }).click();
  await expect(dialog).not.toBeVisible();
  await expect(page.locator("#projects")).toBeFocused();
  await expect(page).toHaveURL(/#projects$/);
  await expect
    .poll(() =>
      page
        .locator("#projects")
        .evaluate((el) => Math.round(el.getBoundingClientRect().top)),
    )
    .toBe(90);
  await trigger.click();
  await page.setViewportSize({ width: 1000, height: 800 });
  await expect(dialog).not.toBeVisible();
  expect(await page.evaluate(() => document.body.style.overflow)).not.toBe(
    "hidden",
  );
});

test("copiar e-mail confirma sucesso e explica permissão negada", async ({
  page,
  context,
}) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  await page.goto("/");
  await page.getByRole("button", { name: /Copiar e-mail|Copiado/ }).click();
  await expect(page.getByRole("status")).toHaveText(
    "Endereço copiado para a área de transferência.",
  );
  expect(await page.evaluate(() => navigator.clipboard.readText())).toBe(
    "duhduh.zip@proton.me",
  );
  await page.evaluate(() =>
    Object.defineProperty(navigator.clipboard, "writeText", {
      value: () =>
        Promise.reject(new DOMException("Not allowed", "NotAllowedError")),
      configurable: true,
    }),
  );
  await page.getByRole("button", { name: /Copiar e-mail|Copiado/ }).click();
  await expect(page.getByRole("status")).toContainText(
    "Não foi possível copiar",
  );
  await expect(page.locator(".email-link")).toHaveAttribute(
    "href",
    "mailto:duhduh.zip@proton.me",
  );
});

test("monograma responde ao mouse e respeita movimento reduzido", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/");
  const scene = page.locator(".monogram-scene");
  await scene.hover({ position: { x: 60, y: 70 } });
  await expect
    .poll(() =>
      page
        .locator(".monogram-plane")
        .evaluate((el) => getComputedStyle(el).transform),
    )
    .not.toBe("none");
  await page.emulateMedia({ reducedMotion: "reduce" });
  await scene.hover({ position: { x: 200, y: 250 } });
  expect(
    await page
      .locator(".monogram-plane")
      .evaluate((el) => getComputedStyle(el).transform),
  ).toBe("none");
  expect(
    await page.evaluate(
      () => getComputedStyle(document.documentElement).scrollBehavior,
    ),
  ).toBe("auto");
});

test("conteúdo e links essenciais funcionam sem JavaScript", async ({
  browser,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto("http://127.0.0.1:3100/");
  await expect(
    page.getByRole("heading", { name: "Vitrine App", exact: true }),
  ).toBeVisible();
  const links = await page
    .locator(".project-links a")
    .evaluateAll((nodes) => nodes.map((el) => el.getAttribute("href")));
  expect(links).toEqual([
    "https://github.com/eduardofontana/vitrine.app",
    "https://github.com/eduardofontana/clinica.app",
    "https://github.com/eduardofontana/sentinel",
  ]);
  await expect(page.locator(".email-link")).toBeVisible();
  await context.close();
});

test("SEO, imagens de compartilhamento e redirecionamentos", async ({
  page,
  request,
}) => {
  const response = await page.goto("/");
  expect(response?.headers()["content-security-policy"]).not.toContain(
    "api.github.com",
  );
  expect(response?.headers()["content-security-policy"]).not.toContain(
    "unsafe-eval",
  );
  await expect(page).toHaveTitle("Eduardo Fontana | Desenvolvedor Full Stack");
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    /^https:\/\/eduardofontana\.com\.br\/?$/,
  );
  await expect(page.locator("html")).toHaveAttribute("lang", "pt-BR");
  for (const name of ["opengraph-image", "twitter-image"]) {
    const result = await request.get(`/${name}`);
    expect(result.status()).toBe(200);
    expect(result.headers()["content-type"]).toContain("image/png");
  }
  expect((await request.get("/sitemap.xml")).status()).toBe(200);
  expect(await (await request.get("/robots.txt")).text()).toContain(
    "Sitemap: https://eduardofontana.com.br/sitemap.xml",
  );
  for (const path of ["about", "projects", "skills", "contact"]) {
    const result = await request.get(`/${path}`, { maxRedirects: 0 });
    expect(result.status()).toBe(308);
    expect(result.headers().location).toBe("/");
  }
});
