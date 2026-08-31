import fs from "fs/promises";
import path from "path";
import type { NextRequest } from "next/server";
import sharp from "sharp";

const PUBLIC_DIR = path.join(process.cwd(), "public");

/**
 * Generates an OpenGraph PNG image from an SVG file.
 * @param request The incoming request.
 * @returns The generated PNG.
 */
export async function GET(request: NextRequest) {
  const src = request.nextUrl.searchParams.get("src");

  if (!src || !src.endsWith(".svg")) {
    return new Response("Not found", { status: 404 });
  }

  const filePath = path.join(PUBLIC_DIR, src);

  if (!filePath.startsWith(PUBLIC_DIR + path.sep)) {
    return new Response("Not found", { status: 404 });
  }

  let svgBuffer: Buffer;
  try {
    svgBuffer = await fs.readFile(filePath);
  } catch {
    return new Response("Not found", { status: 404 });
  }

  const png = await sharp(svgBuffer, { density: 300 })
    .resize({ width: 1200 })
    .png()
    .toBuffer();

  return new Response(png, {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
