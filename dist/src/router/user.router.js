"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerUser = void 0;
const express_1 = require("express");
exports.routerUser = (0, express_1.Router)();
exports.routerUser.get("/login/:method?", function (req, res, next) {
    if (req.params.method == "login" || req.params.method == "signin") {
        res.render("login", { method: "login" });
    }
    else if (req.params.method == "signup" ||
        req.params.method == "register") {
        res.render("login", { method: "signup" });
    }
});
//# sourceMappingURL=user.router.js.map