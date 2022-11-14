"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const data_source_1 = require("../data-source");
const user_1 = require("../model/user");
class userService {
    constructor() {
        this.findAll = async (req, res) => {
            return await this.userRepo.query(`select * from products join categories on idCategory = idC `);
        };
        data_source_1.AppDataSource.initialize().then(async (connection) => {
            console.log('User connect success');
            this.userRepo = connection.getRepository(user_1.user);
        });
    }
}
exports.userService = userService;
//# sourceMappingURL=user-service.js.map