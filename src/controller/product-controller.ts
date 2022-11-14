import {ProductService} from "../service/product-service";
import {Response,Request} from "express";
import {CategoryService} from "../service/category-service";

export class ProductController {
    private productService: ProductService
    private categoryService: CategoryService

    constructor() {
        this.productService = new ProductService();
        this.categoryService = new CategoryService();
    }

    getAll = async (req:Request, res:Response) => {
        let products = await this.productService.findAll(req,res);
        let category = await this.categoryService.findAll(req, res);
        res.render('products/list',{
            listProduct:products,
            listCategory:category
        });
    }


        getProductByCategory =  async (req:Request, res:Response) => {
        let products = await this.productService.findProductByCategory(req,res);
        let category = await this.categoryService.findAll(req, res);
        res.render('products/list',{
            listProduct:products,
            listCategory:category
        });
    }


    showCategoryOnProduct = async (req:Request, res:Response) => {
        let products = await this.productService.showProductByCategory(req,res);
        let category = await this.categoryService.findAll(req, res);
        res.render('products/list',{
            listProduct:products,
            listCategory:category
        });
    }


    showFormCreate = async (req:Request, res:Response) => {
        let category = await this.categoryService.findAll(req, res);
        res.render('products/create', {
            listCategory:category
        });
    }


    createProduct = async (req:Request, res:Response) => {
      await this.productService.saveProduct(req,res);
    }


    showFormEdit = async (req:Request, res:Response) => {
        let category = await this.categoryService.findAll(req, res);
        res.render('products/edit',{
            listCategory:category
        });
    }


    editProduct = async (req:Request, res:Response) => {
        await this.productService.productEdit(req,res);
    }


    deleteProduct = async (req:Request, res:Response) => {
        await this.productService.productDelete(req,res);
    }
}
export default new ProductController();