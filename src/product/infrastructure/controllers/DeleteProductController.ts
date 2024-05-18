import { Request, Response } from 'express';
import DeleteProductUseCase from '../../application/DeleteProductUseCase';

export default class DeleteProductController {
    constructor(readonly deleteProductUseCase: DeleteProductUseCase) { }

    async run(req: Request, res: Response) {
        try {
            const { id } = req.params;

            const product = await this.deleteProductUseCase.execute(id);
            if (!product) {
                res.status(404).json({ error: 'Product not found' });
                return;
            }

            await this.deleteProductUseCase.execute(id);

            res.status(204).json({
                data: null,
                msg: 'Product deleted succesfully',
            })
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}