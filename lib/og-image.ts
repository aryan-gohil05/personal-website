export function getOgImage(imagePath: string): string {
  return `/api/og-image?src=${encodeURIComponent(imagePath)}`;
}