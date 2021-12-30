import PostService from "../service/post-service.js";

export class PostManager {
  async create(req, res, next) {
    try {
      const post = await PostService.create(req.body, req.files.picture);
      res.status(200).json(post);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getAll(req, res) {
    try {
      const posts = await PostService.getAll();
      return res.json(posts);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async getOne(req, res) {
    try {
      const { id } = req.params;
      const post = await PostService.getOne(id);
      return res.json(post);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async update(req, res) {
    try {
      const post = req.body;
      const updatedPost = await PostService.update(post);

      return res.json(updatedPost);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async delete(req, res) {
    try {
      const { id } = req.params;
      const post = await PostService.delete(id);

      return res.json(post);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}
