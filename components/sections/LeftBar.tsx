import ProfileCard from "../ProfileCard";

const LeftBar = () => {
  return (
    <section className="sticky top-6 h-fit w-96 shrink-0 noscrollbar">
      <div className="flex flex-col items-start gap-6 rounded-lg p-6">
        <ProfileCard />
        <p className="mt-12 text-base-content/70">Template text goes here.</p>
      </div>
    </section>
  );
};

export default LeftBar;
