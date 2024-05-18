import { Request, Response } from "express";
import CreateProductUseCase from "../../application/CreateProductUseCase";
import ProductRequest from "../../domain/models/dtos/ProductRequest";

export default class CreateProductController {
    constructor(readonly createProductUseCase: CreateProductUseCase) { }

    async run(req: Request, res: Response) {
        const request: ProductRequest = {
            name: req.body.name ?? "No name",
            price: req.body.price ?? null,
            stock: req.body.stock ?? null,
        };

        try {
            const productSaved = await this.createProductUseCase.execute(request)

            if (!productSaved) {
                return res.status(500).json({
                    data: null,
                    msg: "Product not saved",
                });
            }

            return res.status(201).json({
                data: productSaved,
                msg: "Product registered succesfully",
            });
        } catch (error) {
            return res.status(500).json({
                data: null,
                msg: error,
            });
        }
    }

}