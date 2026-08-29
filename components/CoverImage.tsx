import Image from "next/image";

type CoverImageProps = {
  src: string;
  srcDark?: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
};

export default function CoverImage({
  src,
  srcDark,
  alt,
  width,
  height,
  className = "",
  priority = false,
}: CoverImageProps) {
  const loading = priority ? "eager" : "lazy";

  if (!srcDark) {
    return (
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        className={className}
      />
    );
  }

  return (
    <>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        className={`${className} dark:hidden`}
      />
      <Image
        src={srcDark}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        className={`hidden ${className} dark:block`}
      />
    </>
  );
}