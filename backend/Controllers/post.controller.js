import PostModel from "../models/Post.model.js";

/**
 * CREATE A NEW POST
 */
export const createPost = async (req, res) => {
  try {
    const post = await PostModel.create(req.body);
    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({
      message: "Failed to create post",
      error: error.message,
    });
  }
};

/**
 * GET ALL POSTS
 */
export const getAllPosts = async (req, res) => {
  try {
    const posts = await PostModel.find()
      .populate("category", "name slug")
      .sort({ createdAt: -1 });

    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch posts",
      error: error.message,
    });
  }
};
