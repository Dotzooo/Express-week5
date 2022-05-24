const handleSuccess = require('../service/handleSuccess')
const Users = require('../models/users')

const appError = require('../service/appError')

const users = {
    async getUser(req, res) {

        const allUser = await Users.find()

        handleSuccess(res, allUser);
    },

    async login(req, res) {

        const user = await Users.findOne()

        if (user) {
            handleSuccess(res, user)
        } else {
            appError(400, '資料內容', '尚無用戶註冊', next)
        }
    },

    async singin(req, res, next) {
        const { body } = req
        console.log(body)
        const newUser = await Users.create({
            email: body.email,
            name: body.name,
            photo: body.photo
        })
        if (newUser) {
            handleSuccess(res, newUser)
        } else {
            appError(400, '新增失敗', next)
        }
    }

}

module.exports = users