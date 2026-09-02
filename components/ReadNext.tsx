import type { ReactNode } from "react";

type ReadNextProps = {
  children: ReactNode;
  outerClassName?: string;
  contentClassName?: string;
};

const ReadNext = ({
  children,
  outerClassName = "mx-auto max-w-4xl px-6 pb-10 md:pb-16 lg:flex lg:max-w-350 lg:gap-12",
  contentClassName = "lg:min-w-0 lg:flex-1 lg:ml-auto lg:max-w-4xl",
}: ReadNextProps) => {
  return (
    <div className={outerClassName}>
      <div className={contentClassName}>
        <div className="mt-16 border-t border-base-content/10 pt-8">
          <h2 className="text-2xl font-semibold text-black/90 dark:text-white md:text-3xl">
            Read Next
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {children}
          </div>
        </div>
      </div>

      <div className="hidden lg:block lg:w-80 lg:shrink-0" />
    </div>
  );
};

export default ReadNext;