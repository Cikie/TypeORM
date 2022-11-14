import {Router} from "express";
import {userService} from "../service/user-service";

export const routerUser = Router();

routerUser.get("/login/:method?",function (req, res, next){
    if (req.params.method == "login" || req.params.method  == "signin"){
        res.render("login",{method: "login"});
    }else if(
        req.params.method == "signup" ||
        req.params.method == "register"
    ){
        res.render("login",{method: "signup"});
    }
});

