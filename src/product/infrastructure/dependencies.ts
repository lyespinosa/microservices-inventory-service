import CreateProductUseCase from "../application/CreateProductUseCase";
import DeleteProductUseCase from "../application/DeleteProductUseCase";
import GetAllProductsUseCase from "../application/GetAllProductsUseCase";
import GetProductUseCase from "../application/GetProductUseCase";
import MySqlProductRepository from "./MySqlProductRepository";
import CreateProductController from "./controllers/CreateProductController";
import DeleteProductController from "./controllers/DeleteProductController";
import GetAllProductsController from "./controllers/GetAllProductsController";
import GetProductController from "./controllers/GetProductController";
import { UUIDService } from "./helpers/UUIDService";

export const uuidService = new UUIDService();

export const mySqlAuthorRepository = new MySqlProductRepository(uuidService);

export const createProductUseCase = new CreateProductUseCase(mySqlAuthorRepository);
export const deleteProductUseCase = new DeleteProductUseCase(mySqlAuthorRepository);
export const getAllProductsUseCase = new GetAllProductsUseCase(mySqlAuthorRepository);
export const getProductUseCase = new GetProductUseCase(mySqlAuthorRepository);

export const createProductController = new CreateProductController(createProductUseCase);
export const deleteProductController = new DeleteProductController(deleteProductUseCase);
export const getAllProductsController = new GetAllProductsController(getAllProductsUseCase);
export const getProductController = new GetProductController(getProductUseCase);


