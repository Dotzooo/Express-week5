var express = require('express')
var router = express.Router()

const handleErrorAsync = require("../service/handleErrorAsync");
const UserController = require('../controllers/users')

// 取得所有用戶
router.get('/', handleErrorAsync(UserController.getUser))

// 登入
router.post('/', handleErrorAsync(UserController.login))

// 用戶註冊
router.post('/signin', handleErrorAsync(UserController.singin))

module.exports = router
