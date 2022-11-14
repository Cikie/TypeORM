import {AppDataSource} from "../data-source";
import {Category} from "../model/category";
import {Request,Response} from "express";


export class CategoryService{
    private categoryRepo:any;

    constructor() {
        AppDataSource.initialize().then(async connection => {
            console.log('Connect DB Success !!')
             this.categoryRepo = await connection.getRepository(Category)
        });
    }
    findAll = async (req: Request, res: Response) => {
        return await this.categoryRepo.find()
    }

}

export default new CategoryService()