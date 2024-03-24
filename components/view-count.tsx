import { UserCircleIcon } from "lucide-react";
import { readFile } from "node:fs/promises";

const sleep = (delay: number) =>
  new Promise((resolve) => setTimeout(resolve, delay));

export const ViewCount = async () => {
  async function getViewCount() {
    await sleep(5000);
    try {
      const data = await readFile("./data/view-count.txt", {
        encoding: "utf8",
      });
      return data;
    } catch (err) {
      // TODO: Handle error
      console.log(err);
    }
  }

  return (
    <p className="flex z-30 gap-2 text-red-600 font-semibold">
      <UserCircleIcon />
      {await getViewCount()}
    </p>
  );
};
