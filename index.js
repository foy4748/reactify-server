const data = require("./data.json");
const titles = require("./titles.json");
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send({ error: false, working: true, data });
});
app.get("/titles", (req, res) => {
  res.send(titles);
});

app.get("/:postId", (req, res) => {
  const { postId } = req.params;
  const post = data.find((item) => item.id == postId);
  res.send(post);
});

app.listen(PORT, () => console.log(`SERVER is listening to port: ${PORT}`));
