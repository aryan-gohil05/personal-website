import fs from "fs/promises";
import path from "path";
import type { NextRequest } from "next/server";
import sharp from "sharp";

const PUBLIC_DIR = path.join(process.cwd(), "public");
const OG_WIDTH = 1200;
const OG_HEIGHT = 630;

/**
 * Normalizes any local image (SVG, JPG, PNG) into a proper 1200x630
 * landscape OG image. Portrait sources (e.g. book covers) get letterboxed
 * onto a blurred backdrop of themselves instead of being served at their
 * native aspect ratio, which some crawlers (notably WhatsApp) reject.
 * @param request The incoming request.
 * @returns The generated PNG.
 */
export async function GET(request: NextRequest) {
  const src = request.nextUrl.searchParams.get("src");

  if (!src) {
    return new Response("Not found", { status: 404 });
  }

  const filePath = path.join(PUBLIC_DIR, src);

  if (!filePath.startsWith(PUBLIC_DIR + path.sep)) {
    return new Response("Not found", { status: 404 });
  }

  let sourceBuffer: Buffer;
  try {
    sourceBuffer = await fs.readFile(filePath);
  } catch {
    return new Response("Not found", { status: 404 });
  }

  const sharpOptions = src.endsWith(".svg") ? { density: 300 } : undefined;
  const source = sharp(sourceBuffer, sharpOptions);

  const [background, foreground] = await Promise.all([
    source
      .clone()
      .resize({ width: OG_WIDTH, height: OG_HEIGHT, fit: "cover" })
      .blur(30)
      .png()
      .toBuffer(),
    source
      .clone()
      .resize({
        width: OG_WIDTH,
        height: OG_HEIGHT,
        fit: "contain",
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      })
      .png()
      .toBuffer(),
  ]);

  const png = await sharp(background)
    .composite([{ input: foreground }])
    .png()
    .toBuffer();

  return new Response(png, {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
