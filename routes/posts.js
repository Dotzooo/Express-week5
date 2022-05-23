var express = require('express');
var router = express.Router();

const handleErrorAsync = require("../service/handleErrorAsync");
const PostController = require('../controllers/posts');


// 取得所有貼文
router.get('/', handleErrorAsync((req, res, next) => PostController.getPosts(req, res, next)))

// 新增貼文
router.post('/', handleErrorAsync((req, res, next) => PostController.createPost(req, res, next)))

// 修改貼文
router.patch('/:id', handleErrorAsync((req, res, next) => PostController.editPost(req, res, next)))

// 刪除指定貼文
router.delete('/:id', handleErrorAsync((req, res, next) => PostController.deletePost(req, res, next)))

// 刪除所有貼文
router.delete('/', handleErrorAsync((req, res, next) => PostController.deleteAllPosts(req, res, next)))

module.exports = router;
