import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import productRouter from "./product/infrastructure/ProductRouter";

dotenv.config();

const APP_PORT = process.env["APP_PORT"] ?? 3000;

const server = express();

server.use(cors());
server.use(express.json());

server.use("/api/product", productRouter);

server.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

server.listen(APP_PORT, () => {
  console.clear()
  console.log(`\n-> API listening on http://localhost:${APP_PORT}/`);
});