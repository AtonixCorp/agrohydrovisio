const Post = require('../public/Post')

async function fetchPostsFromDatabase({ skip, limit }) {
  try {
    const posts = await Post.find()
      .sort({ createdAt: -1 }) // Assuming you want the newest posts first
      .skip(skip)
      .limit(limit)
    return posts
  } catch (error) {
    console.error('Error fetching posts from database:', error)
    throw error
  }
}

module.exports = { fetchPostsFromDatabase }
