import express from "express";

const app = express();
const PORT = 8080;

app.listen(PORT, () => {
  console.log("==========================");
  console.log("Server Started on port 8080");
  console.log("==========================");
});
