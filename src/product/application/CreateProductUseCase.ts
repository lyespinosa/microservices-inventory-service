import ProductRepository from "../domain/models/ProductRepository";
import ProductResponse from "../domain/models/dtos/ProductReponse";
import ProductRequest from "../domain/models/dtos/ProductRequest";

export default class CreateProductUseCase {
    constructor(readonly productRepository: ProductRepository) { }

    async execute(product: ProductRequest): Promise<ProductResponse | null> {
        try {
            let result = await this.productRepository.save(product);
            if (!result) {
                return null;
            }

            let productResponse: ProductResponse = {
                id: result.id,
                name: result.name,
                price: result.price,
                stock: result.stock,
            };

            return productResponse;
        } catch (e) {
            console.error(e);
            return null;
        }
    }
}
