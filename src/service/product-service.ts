import {AppDataSource} from "../data-source";
import {Products} from "../model/products";
import {Request, Response} from "express";
import {UploadedFile} from "express-fileupload"

export class ProductService {
    private productRepo: any;

    constructor() {
        AppDataSource.initialize().then(connection => {
            console.log('Connect DB Success !!')
            this.productRepo = AppDataSource.getRepository(Products)
        });
    }

    findAll = async (req: Request, res: Response) => {
        return await this.productRepo.find()
    }

    saveProduct = async (req: Request, res: Response) => {
        let file = req.files;
        if (file != null) {
            let product = req.body;
            let image = file.image as UploadedFile;
            await image.mv('./public/storage/' + image.name);
            product.image = "storage/" + image.name
            await this.productRepo.save(product);
            res.redirect(301, '/products',)
        }
    }
    productEdit = async (req: Request, res: Response) => {
        let files = req.files;
        let idPro = req.params.id
        if (files != null) {
            let products = req.body;
            let image = files.image as UploadedFile;
            await image.mv('./public/storage/' + image.name);
            products.image = "storage/" + image.name
            await this.productRepo.update({id: idPro}, products);
            res.redirect(301, '/products',)
        }
    }

    productDelete = async (req: Request, res: Response) => {
        let idPro = req.params.id
            await this.productRepo.delete({id: idPro});
            res.redirect(301, '/products',)
        }
}
