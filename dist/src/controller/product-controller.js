"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const product_service_1 = require("../service/product-service");
class ProductController {
    constructor() {
        this.getAll = async (req, res) => {
            let products = await this.productService.findAll(req, res);
            res.render('products/list', {
                listProduct: products
            });
        };
        this.showFormCreate = async (req, res) => {
            res.render('products/create');
        };
        this.createProduct = async (req, res) => {
            await this.productService.saveProduct(req, res);
        };
        this.showFormEdit = async (req, res) => {
            res.render('products/edit');
        };
        this.editProduct = async (req, res) => {
            await this.productService.productEdit(req, res);
        };
        this.deleteProduct = async (req, res) => {
            await this.productService.productDelete(req, res);
        };
        this.productService = new product_service_1.ProductService();
    }
}
exports.ProductController = ProductController;
exports.default = new ProductController();
//# sourceMappingURL=product-controller.js.map