import ProductRepository from "../domain/models/ProductRepository";

export default class DeleteProductUseCase {
    constructor(private readonly productRepository: ProductRepository) {}

    async execute(id: string): Promise<Boolean> {

        const product = await this.productRepository.findById(id);

        if (!product) {
            throw new Error('Product not found');
        }

        await this.productRepository.delete(id);

        return true;
    }
}