import { Request, Response } from "express";
export declare class CategoryService {
    private categoryRepo;
    constructor();
    findAll: (req: Request, res: Response) => Promise<any>;
}
declare const _default: CategoryService;
export default _default;
