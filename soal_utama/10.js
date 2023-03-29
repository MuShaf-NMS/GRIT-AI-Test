const express = require("express");
const validator = require("./11");

const app = express();
const port = 8000;

app.use(express.json());

app.get("/", validator, (req, res) => {
  return res.json({ msg: "Selamat Datang" });
});

app.post("/", validator, (req, res) => {
  if (req.body.msg === "ping") return res.json({ msg: "pong" });
  return res.json({ msg: "Unknown" });
});

app.listen(port, () => {
  console.log(`run on port: ${port}`);
});
