import Avatar from "./Avatar";

export default function BlogIcon() {
  return (
    <div className="mt-1 flex items-center gap-2">
      <Avatar className="w-6" />
      <span className="text-sm font-semibold text-secondary">Aryan Gohil</span>
    </div>
  );
}
