import {Router} from "express";
import productController from "../controller/product-controller";
export const routerProduct = Router();
routerProduct.get('/products',productController.getAll);

routerProduct.get('/create',productController.showFormCreate);
routerProduct.post('/create',productController.createProduct);

routerProduct.get('/edit/:id',productController.showFormEdit);
routerProduct.post('/edit/:id',productController.editProduct);