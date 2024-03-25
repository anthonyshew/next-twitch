import { readFile } from "fs/promises";
import { sleep } from "./utils";

export async function getViewCount() {
  await sleep(5000);
  try {
    const data = await readFile("./data/view-count.txt", {
      encoding: "utf8",
    });
    return parseInt(data);
  } catch (err) {
    // TODO: Handle error
    console.log(err);
  }
}
