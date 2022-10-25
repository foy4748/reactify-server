const fs = require("fs");
const posts = [];

function makeData(fileNumber) {
  const fileName = `./0${fileNumber}.md`;
  fs.readFile(fileName, "utf8", (error, post) => {
    if (error) {
      console.log(error);
      return;
    }

    const _content = { post };
    const content = JSON.stringify(_content);
    console.log(content);
    //posts.push(content);
  });
}

for (let i = 1; i <= 6; i++) {
  makeData(i);
}
