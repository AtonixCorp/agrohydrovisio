const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
); // This adds createdAt and updatedAt fields automatically

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
