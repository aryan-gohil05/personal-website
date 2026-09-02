import Link from "next/link";

const BackButton = ({ returnUrl }: { returnUrl: string }) => {
  return (
    <Link
      href={returnUrl}
      className="inline-flex items-center gap-2 text-sm font-semibold text-base-content/70 hover:text-secondary"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
      >
        <path d="M19 12H5" />
        <path d="m12 19-7-7 7-7" />
      </svg>
      Back
    </Link>
  );
};

export default BackButton;
