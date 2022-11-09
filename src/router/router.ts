import {Router} from "express";
import {routerProduct} from "./product-routing.router";

export const router = Router();
router.use('', routerProduct);