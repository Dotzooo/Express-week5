var express = require('express')
var router = express.Router()

const handleErrorAsync = require("../service/handleErrorAsync");
const UserController = require('../controllers/users')

// 取得所有用戶
router.get('/', handleErrorAsync((req, res, next) => UserController.getUser(req, res, next)))

// 登入
router.post('/', handleErrorAsync((req, res, next) => UserController.login(req, res, next)))

// 用戶註冊
router.post('/signin', handleErrorAsync((req, res, next) => UserController.singin(req, res, next)))

module.exports = router
