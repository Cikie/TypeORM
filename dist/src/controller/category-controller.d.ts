import { Response, Request } from "express";
export declare class CategoryController {
    private categoryService;
    constructor();
    getAll: (req: Request, res: Response) => Promise<void>;
}
