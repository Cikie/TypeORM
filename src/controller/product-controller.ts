import {ProductService} from "../service/product-service";
import {Response,Request} from "express";

export class ProductController {
    private productService: ProductService

    constructor() {
        this.productService = new ProductService();
    }

    getAll = async (req:Request, res:Response) => {
        let products = await this.productService.findAll(req,res);
        res.render('products/list',{
            listProduct:products
        });
    }

    showFormCreate = async (req:Request, res:Response) => {
        res.render('products/create');
    }

    createProduct = async (req:Request, res:Response) => {
      await this.productService.saveProduct(req,res);
    }

    showFormEdit = async (req:Request, res:Response) => {
        res.render('products/edit');
    }

    editProduct = async (req:Request, res:Response) => {
        await this.productService.productEdit(req,res);
    }

    deleteProduct = async (req:Request, res:Response) => {
        await this.productService.productDelete(req,res);
    }
}
export default new ProductController();