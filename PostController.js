import Post from "./Post.js";
import PostService from "./PostService.js";

class PostController {
  async create(req, res) {
    try {
      const request = req.body;
      const post = await PostService.create(request);
      return res.status(200).json(post);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getAll(req, res) {
    try {
      const posts = await PostService.getAll();
      return res.status(200).json(posts);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getOne(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(400).json({
          message: "ID not found",
        });
      }
      const post = await PostService.getOne(id);
      return res.status(200).json(post);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async update(req, res) {
    try {
      const post = req.body;
      if (!post._id) {
        res.status(400).json({
          message: "ID not found",
        });
      }
      const updatedPost = await PostService.update(post);
      return res.status(200).json(updatedPost);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(400).json({
          message: "ID not found",
        });
      }
      const deletedPost = await PostService.delete(id);
      return res.status(200).json(deletedPost);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new PostController();
