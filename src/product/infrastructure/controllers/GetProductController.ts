import { Request, Response } from "express";
import GetProductUseCase from "../../application/GetProductUseCase";

export default class GetProductController {
    constructor(readonly getProductUseCase: GetProductUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const { id } = req.params;

            const product = await this.getProductUseCase.execute(id);
            if (!product) {
                res.status(404).json({ error: 'Product not found' });
                return;
            }

            res.status(200).json({
                data: product,
                msg: 'Product found succesfully',
            });
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}