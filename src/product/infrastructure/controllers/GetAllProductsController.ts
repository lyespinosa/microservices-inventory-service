import { Request, Response } from "express";
import GetAllProductsUseCase from "../../application/GetAllProductsUseCase";

export default class GetAllProductsController {
    constructor(readonly getAllProductsUseCase: GetAllProductsUseCase) { }

    async run(req: Request, res: Response) {
        const result = await this.getAllProductsUseCase.execute();
        if (!result) {
            return res.status(500).json({
                msg: "Internal server error",
                data: null,
            });
        }
        return res.status(200).json({
            msg: "Products listed successfully",
            data: result,
        });
    }
}