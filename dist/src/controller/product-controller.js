"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const product_service_1 = require("../service/product-service");
const category_service_1 = require("../service/category-service");
class ProductController {
    constructor() {
        this.getAll = async (req, res) => {
            let products = await this.productService.findAll(req, res);
            let category = await this.categoryService.findAll(req, res);
            res.render('products/list', {
                listProduct: products,
                listCategory: category
            });
        };
        this.getProductByCategory = async (req, res) => {
            let products = await this.productService.findProductByCategory(req, res);
            let category = await this.categoryService.findAll(req, res);
            res.render('products/list', {
                listProduct: products,
                listCategory: category
            });
        };
        this.showCategoryOnProduct = async (req, res) => {
            let products = await this.productService.showProductByCategory(req, res);
            let category = await this.categoryService.findAll(req, res);
            res.render('products/list', {
                listProduct: products,
                listCategory: category
            });
        };
        this.showFormCreate = async (req, res) => {
            let category = await this.categoryService.findAll(req, res);
            res.render('products/create', {
                listCategory: category
            });
        };
        this.createProduct = async (req, res) => {
            await this.productService.saveProduct(req, res);
        };
        this.showFormEdit = async (req, res) => {
            let category = await this.categoryService.findAll(req, res);
            res.render('products/edit', {
                listCategory: category
            });
        };
        this.editProduct = async (req, res) => {
            await this.productService.productEdit(req, res);
        };
        this.deleteProduct = async (req, res) => {
            await this.productService.productDelete(req, res);
        };
        this.productService = new product_service_1.ProductService();
        this.categoryService = new category_service_1.CategoryService();
    }
}
exports.ProductController = ProductController;
exports.default = new ProductController();
//# sourceMappingURL=product-controller.js.map