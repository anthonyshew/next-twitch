// Increment the number in /data/view-count.txt every second
const main = () => {
  const fs = require("fs");
  const path = require("path");
  const viewCountPath = path.join(__dirname, "../data/view-count.txt");
  setInterval(() => {
    fs.readFile(viewCountPath, "utf8", (err, data) => {
      if (err) {
        console.error(err);
        return;
      }

      const viewCount = parseInt(data, 10) + 1;

      fs.writeFile(viewCountPath, viewCount.toString(), (err) => {
        if (err) {
          console.error(err);
        }
      });

      console.log(`View count incremented to ${viewCount}!`);
    });
  }, 1000);
};

main();
