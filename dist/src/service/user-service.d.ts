import { Request, Response } from "express";
export declare class userService {
    private userRepo;
    constructor();
    findAll: (req: Request, res: Response) => Promise<any>;
}
