import express from "express";
import mongoose from "mongoose";

const app = express();

app.get('/', (req, res) => {
  res.send('It works!');
})

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});