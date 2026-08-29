import Image from "next/image";

type AvatarProps = {
  className?: string;
  priority?: boolean;
};

export default function Avatar({
  className = "w-12",
  priority = false,
}: AvatarProps) {
  return (
    <div
      className={`aspect-square overflow-hidden rounded-full bg-primary/15 ring-1 ring-primary/20 ${className}`}
    >
      <Image
        src="/me.svg"
        alt="Aryan Gohil"
        width={150}
        height={150}
        loading={priority ? "eager" : "lazy"}
        className="h-full w-full object-cover"
      />
    </div>
  );
}