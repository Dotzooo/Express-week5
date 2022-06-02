var express = require('express');
var router = express.Router();

const handleErrorAsync = require("../service/handleErrorAsync");
const PostController = require('../controllers/posts');


// 取得所有貼文
router.get('/posts', handleErrorAsync(PostController.getPosts))

// 新增貼文
router.post('/post', handleErrorAsync(PostController.createPost))

// 修改貼文
router.patch('/post/:id', handleErrorAsync(PostController.editPost))

// 刪除指定貼文
router.delete('/post/:id', handleErrorAsync(PostController.deletePost))

// 刪除所有貼文
router.delete('/posts', handleErrorAsync(PostController.deleteAllPosts))

module.exports = router;