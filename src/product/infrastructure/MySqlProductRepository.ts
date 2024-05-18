import query from "../../database/connection";
import UUIDInterface from "../application/services/UUIDInterface";
import Product from "../domain/models/Product";
import ProductRepository from "../domain/models/ProductRepository";
import ProductRequest from "../domain/models/dtos/ProductRequest";

export default class MySqlProductRepository implements ProductRepository {

    constructor(readonly uuidService: UUIDInterface) { }


    async save(product: ProductRequest): Promise<Product | null> {
        const sentence = "INSERT INTO products (id, name, price, stock) VALUES (?, ?, ?, ?)";

        const params: string[] = [
            this.uuidService.get_uuid(),
            product.name,
            product.price.toString(),
            product.stock.toString()
        ];

        try {
            const [result]: any = await query(sentence, params);

            if (result === null || result.length === 0) {
                return null;
            }

            const response: Product = {
                id: result.insertId,
                name: product.name,
                price: product.price,
                stock: product.stock,
            };

            return response;
        } catch (error) {
            console.log("Ha ocurrido un error con su petición.");
            console.error(error);
            return null;
        }
    }

    async list(): Promise<Product[] | null> {
        const sentence = "SELECT * FROM products";
        try {
            const [results]: any = await query(sentence, []);
            const response: Product[] = [];

            if (results === null) {
                return [];
            }

            results.map((individual: any) => {
                response.push({
                    id: individual.id,
                    name: individual.name,
                    price: individual.price,
                    stock: individual.stock,
                });
            });

            return response;
        } catch (error) {
            console.log("Ha ocurrido un error con su petición.");
            console.error(error);
            return [];
        }
    }

    async findById(id: string): Promise<Product | null> {

        const sentence = "SELECT * FROM products WHERE id = ?";

        const params = [id];

        try {
            const [result]: any = await query(sentence, params);

            if (result === null) {
                return null;
            }

            const response: Product = {
                id: result[0].id,
                name: result[0].name,
                price: result[0].price,
                stock: result[0].stock,
            };

            return response;
        } catch (error) {
            console.log("Ha ocurrido un error con su petición.");
            console.error(error);
            return null;
        }
    }


    async delete(id: string): Promise<boolean> {
        const sentence = "DELETE FROM products WHERE id = ?";

        const params = [id];

        try {
            const [result]: any = await query(sentence, params);

            if (result === null) {
                return false;
            }

            return true;

        } catch (error) {
            console.log("Ha ocurrido un error con su petición.");
            console.error(error);
            return false;
        }
    }



}