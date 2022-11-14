"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryController = void 0;
const category_service_1 = require("../service/category-service");
class CategoryController {
    constructor() {
        this.getAll = async (req, res) => {
            let products = await this.categoryService.findAll(req, res);
            res.render('products/list', {
                listProduct: products
            });
        };
        this.categoryService = new category_service_1.CategoryService();
    }
}
exports.CategoryController = CategoryController;
//# sourceMappingURL=category-controller.js.map