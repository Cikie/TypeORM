import { Response, Request } from "express";
export declare class ProductController {
    private productService;
    private categoryService;
    constructor();
    getAll: (req: Request, res: Response) => Promise<void>;
    getProductByCategory: (req: Request, res: Response) => Promise<void>;
    showCategoryOnProduct: (req: Request, res: Response) => Promise<void>;
    showFormCreate: (req: Request, res: Response) => Promise<void>;
    createProduct: (req: Request, res: Response) => Promise<void>;
    showFormEdit: (req: Request, res: Response) => Promise<void>;
    editProduct: (req: Request, res: Response) => Promise<void>;
    deleteProduct: (req: Request, res: Response) => Promise<void>;
}
declare const _default: ProductController;
export default _default;
