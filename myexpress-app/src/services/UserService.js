
const USERS = require('../data/users');


class UserService {
    constructor() {
    }
    findAllUsers() {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, USERS)
        })
    }
}
module.exports = new UserService();
