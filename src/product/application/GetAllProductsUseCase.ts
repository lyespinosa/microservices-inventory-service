import ProductRepository from "../domain/models/ProductRepository";
import ProductResponse from "../domain/models/dtos/ProductReponse";

export default class GetAllProductsUseCase {
    constructor(private productRepository: ProductRepository) {}

    async execute(): Promise<ProductResponse[]> {
        try{
            const result = await this.productRepository.list();

            if(!result){
                return [];
            }

            const response = result.map(product => {
                return {
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    stock: product.stock
                };
            });

            return response;
        } catch (e) {
            console.error(e);
            return [];
        }
    }
}