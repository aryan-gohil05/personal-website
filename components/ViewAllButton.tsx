import Link from "next/link";

const ViewAllButton = ({ url }: { url: string }) => {
  return (
    <Link
      href={url}
      className="group text-sm btn rounded-xl bg-secondary text-white"
    >
      {url === "/blog" ? "More Posts" : "More Books"}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:scale-110"
      >
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
    </Link>
  );
};

export default ViewAllButton;
