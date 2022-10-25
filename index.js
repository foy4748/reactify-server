const data = require("./data.json");
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send(data);
});

app.listen(PORT, () => console.log(`SERVER is listening to port: ${PORT}`));
