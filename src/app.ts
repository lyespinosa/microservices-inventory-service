import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import productRouter from "./product/infrastructure/ProductRouter";

dotenv.config();

const APP_PORT = process.env["APP_PORT"] ?? 3000;

const server = express();

server.use(cors());
server.use(express.json());

server.use("/product", productRouter);

server.listen(APP_PORT, () => {
  console.clear()
  console.log(`\n-> API listening on http://127.0.0.1:${APP_PORT}/`);
});