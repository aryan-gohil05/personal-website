export function getOgImage(imagePath: string): string {
  if (!imagePath.endsWith(".svg")) {
    return imagePath;
  }

  return `/api/og-image?src=${encodeURIComponent(imagePath)}`;
}