export const Bio = () => {
  return (
    <div className="flex flex-col mt-4 px-4 gap-4">
      <p className="font-bold text-lg">Bio</p>
      <p>
        Anthony is a full-stack comedian that loves to teach stuff about
        Turborepo, Turbopack, and Next.js!
      </p>
      <p className="font-bold text-lg">Links</p>
      <div className="flex gap-4">
        <a className="flex items-center gap-2" href="">
          X
        </a>

        <a className="flex items-center gap-2" href="">
          YouTube
        </a>

        <a className="flex items-center gap-2" href="">
          Threads
        </a>

        <a className="flex items-center gap-2" href="">
          GitHub
        </a>
      </div>
    </div>
  );
};
