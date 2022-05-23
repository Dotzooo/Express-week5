const handleSuccess = require('../service/handleSuccess')
const Users = require('../models/users')


const users = {
    async getUser(req, res) {
        const user = {
            name: "Adam"
        }

        handleSuccess(res, user);
    },
    async login(req, res) {
        const login = {
            name: "Adam"
        }

        handleSuccess(res, login);
    },
}

module.exports = users