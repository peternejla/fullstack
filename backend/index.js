import express from "express";
import path from "path";
const app = express();

const port = process.env.PORT || 3000;

app.get("/api", (req, res) => {
  console.log("hej från endpoint");
  res.send({ hej: "alla" });
});

console.log(path.resolve());

app.use(express.static(path.join(path.resolve(), "dist")));

app.listen(port, () => {
  console.log(` backend igång på port ${port}`);
});
