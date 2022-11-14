"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const data_source_1 = require("../data-source");
const products_1 = require("../model/products");
class ProductService {
    constructor() {
        this.findAll = async (req, res) => {
            return await this.productRepo.query(`select * from products join categories on idCategory = idC `);
        };
        this.findProductByCategory = async (req, res) => {
            let idFind = req.params.idC;
            console.log(idFind);
            let products = await this.productRepo.query(`select * from products join categories on idCategory = idC where idC = '${idFind}'`);
            return products;
        };
        this.showProductByCategory = async (req, res) => {
            let idFind = req.params.id;
            let nameFind = req.body.name;
            let products = await this.productRepo.query(`select * from products join categories on idCategory = idC where idC = '%${idFind}%' and products.name like %${nameFind}%`);
            return products;
        };
        this.saveProduct = async (req, res) => {
            let file = req.files;
            if (file != null) {
                let product = req.body;
                let image = file.image;
                await image.mv('./public/storage/' + image.name);
                product.image = "storage/" + image.name;
                await this.productRepo.save(product);
                res.redirect(301, '/products');
            }
        };
        this.productEdit = async (req, res) => {
            let files = req.files;
            let idPro = req.params.id;
            if (files != null) {
                let products = req.body;
                let image = files.image;
                await image.mv('./public/storage/' + image.name);
                products.image = "storage/" + image.name;
                await this.productRepo.update({ id: idPro }, products);
                res.redirect(301, '/products');
            }
        };
        this.productDelete = async (req, res) => {
            let idPro = req.params.id;
            await this.productRepo.delete({ id: idPro });
            res.redirect(301, '/products');
        };
        data_source_1.AppDataSource.initialize().then(async (connection) => {
            console.log('Connect DB Success !!');
            this.productRepo = await connection.getRepository(products_1.Products);
        });
    }
}
exports.ProductService = ProductService;
//# sourceMappingURL=product-service.js.map