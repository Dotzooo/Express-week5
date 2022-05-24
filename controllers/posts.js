const handleSuccess = require('../service/handleSuccess')
const Post = require('../models/posts')
const appError = require('../service/appError')


const posts = {
    async getPosts(req, res, next) {
        // 時間排序
        const timeSort = req.query.timeSort == "asc" ? "createdAt" : "-createdAt"
        // 關鍵字
        const q = req.query.q !== undefined ? { "content": new RegExp(req.query.q) } : {}

        const allPosts = await Post.find(q).populate({
            path: 'user',
            select: 'name photo'
        }).sort(timeSort)

        handleSuccess(res, allPosts)
    },

    async createPorst(req, res, next) {
        const { data } = req.body

        if (data.content) {
            const newPost = await Post.create({
                content: data.content,
                image: data.image,
                createdAt: data.createdAt,
                user: data.user,
                likes: data.likes
            })
            handleSuccess(res, newPost)
        } else {
            appError(400, '請填寫 content', next)
        }
    },

    async editPost(req, res, next) {
        const { body, params: { id } } = req

        const post = await Post.findByIdAndUpdate(id, body)

        if (post) {
            handleSuccess(res, post)
        } else {
            appError(400, '貼文修改失敗', next)
        }
    },

    async deletePost(req, res, next) {
        const { id } = req.params

        const post = await Post.findByIdAndDelete(id)

        if (post) {
            handleSuccess(res)
        } else {
            appError(400, '貼文刪除失敗', next)
        }
    },

    async deleteAllPosts(req, res, next) {
        const postResult = await Post.deleteMany({})
        handleSuccess(res, postResult)
        res.end()
    }
}

module.exports = posts