var express = require('express')
var router = express.Router()

const UserController = require('../controllers/users')

// 取得所有用戶
router.get('/', UserController.getUser)

// 登入
router.post('/', UserController.login)

module.exports = router
