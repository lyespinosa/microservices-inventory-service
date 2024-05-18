import Product from "./Product";
import ProductRequest from "./dtos/ProductRequest";

export default interface ProductRepository {
    save(product: ProductRequest): Promise<Product| null>;
    list(): Promise<Product[] | null>;
    findById(id: string): Promise<Product | null>;
    delete(id: string): Promise<boolean>;
}