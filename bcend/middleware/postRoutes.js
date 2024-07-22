// In routes/postRoutes.js
const express = require('express')
const Post = require('../public/Post')
const verifyToken = require('../dashboard/models/verifyToken')

const router = express.Router()

// fetchPostsFromDatabase function

const {
  fetchPostsFromDatabase,
} = require('../fetchPostsFromDatabase/databaseOperations')

router.post('/', verifyToken, async (req, res) => {
  const { userId, content } = req.body
  try {
    await createPost(userId, content)
    res.status(201).send('Post created successfully')
  } catch (error) {
    res.status(500).send('Error creating the post')
  }
})

// Middleware to verify ownership
const verifyOwnership = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id)
    if (post.user.toString() !== req.user.id) {
      return res.status(403).send('Not authorized to perform this action')
    }
    req.post = post // Pass post to the next middleware
    next()
  } catch (error) {
    res.status(500).send('Server error')
  }
}

// Create a new post
router.post('/', verifyToken, async (req, res) => {
  app.post('/posts', async (req, res) => {
    const { userId, content } = req.body
    try {
      await createPost(userId, content)
      res.status(201).send('Post created successfully')
    } catch (error) {
      res.status(500).send('Error creating the post')
    }
  })
})

// Edit a post
router.put('/:id', verifyToken, verifyOwnership, async (req, res) => {
  try {
    const { content } = req.body
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      { content },
      { new: true },
    )
    res.json(updatedPost)
  } catch (error) {
    res.status(500).send('Server error')
  }
})

// Delete a post
router.delete('/:id', verifyToken, verifyOwnership, async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id)
    res.send('Post deleted successfully')
  } catch (error) {
    res.status(500).send('Server error')
  }
})

module.exports = router
