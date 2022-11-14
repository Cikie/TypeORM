import {Router} from "express";
import {routerProduct} from "./product-routing.router";
import {routerUser} from "./user.router";

export const router = Router();
router.use('', routerProduct);
router.use('',routerUser);