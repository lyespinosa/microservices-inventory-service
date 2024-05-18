import express from "express";
import { createProductController, deleteProductController, getAllProductsController, getProductController } from "./dependencies";


const productRouter = express.Router();


productRouter.get("/", getAllProductsController.run.bind(getAllProductsController));
productRouter.get("/:id", getProductController.run.bind(getProductController));
productRouter.post("/", createProductController.run.bind(createProductController));
productRouter.delete("/:id", deleteProductController.run.bind(createProductController));

export default productRouter;
