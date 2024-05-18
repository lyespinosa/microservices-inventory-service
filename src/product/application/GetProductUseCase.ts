import ProductRepository from "../domain/models/ProductRepository";
import ProductResponse from "../domain/models/dtos/ProductReponse";

export default class GetProductUseCase {
    constructor(private productRepository: ProductRepository) {}

    async execute(id: string): Promise<ProductResponse> {
        const product = await this.productRepository.findById(id);
        if (!product) {
            throw new Error('Product not found');
        }
        return product;
    }
}