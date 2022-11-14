import { Request, Response } from "express";
export declare class ProductService {
    private productRepo;
    constructor();
    findAll: (req: Request, res: Response) => Promise<any>;
    findProductByCategory: (req: Request, res: Response) => Promise<any>;
    showProductByCategory: (req: Request, res: Response) => Promise<any>;
    saveProduct: (req: Request, res: Response) => Promise<void>;
    productEdit: (req: Request, res: Response) => Promise<void>;
    productDelete: (req: Request, res: Response) => Promise<void>;
}
