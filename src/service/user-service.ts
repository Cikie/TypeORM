import {AppDataSource} from "../data-source";
import {user} from "../model/user";
import {Request,Response} from "express";

export class userService{
    private userRepo:any;

    constructor() {
        AppDataSource.initialize().then(async connection =>{
            console.log('User connect success')
            this.userRepo = connection.getRepository(user)
        });
    }
    findAll = async (req: Request, res: Response) => {
        return await this.userRepo.query(`select * from products join categories on idCategory = idC `);
    };

}
