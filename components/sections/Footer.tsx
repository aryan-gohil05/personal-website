import Link from "next/link";
import Socials from "@/components/Socials";
import ThemeToggle from "@/components/ThemeToggle";

const Footer = () => {
  return (
    <footer className="bg-base-100">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-8 py-16 text-center md:flex-row md:items-end md:justify-between md:text-left">
        <div className="mx-auto max-w-60 md:mx-0 md:max-w-none">
          <Link
            href="/"
            className="mb-4 flex items-center justify-center md:justify-start"
          >
            <span className="text-3xl font-extrabold">Aryan Gohil</span>
          </Link>
          <p className="text-sm text-base-content/50">
            &copy; {new Date().getFullYear()} Aryan Gohil. All rights reserved.
          </p>
          <div className="mt-6 flex justify-center md:justify-start">
            <div className="w-32">
              <Socials />
            </div>
          </div>
        </div>

        <div className="mx-auto flex flex-col space-y-12 w-full max-w-xs justify-between md:mx-0 md:flex-row">
          <div>
            <h3 className="mb-4 text-sm font-semibold text-base-content/50 uppercase">
              Content
            </h3>
            <ul className="space-y-2 text-sm font-semibold">
              <li>
                <Link href="/#posts" className="link link-hover">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/#worth-your-time" className="link link-hover">
                  Worth Your Time
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-base-content/50 uppercase">
              Business
            </h3>
            <ul className="space-y-2 text-sm font-semibold">
              <li>
                <a
                  href="https://upvoted.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link link-hover"
                >
                  Upvoted
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mx-auto md:mx-0">
          <ThemeToggle inline />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
