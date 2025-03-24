import express from "express";

const app = express();

app.get("/:name?", ({ params: { name = "friend" } }, res) => {
  res.send(`Hello, ${name}!`);
});

app.listen(3001);
