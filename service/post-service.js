import Post from "../models/post-model.js";
import fileService from "./file-service.js";

class PostService {
  async create(post, picture) {
    const fileName = fileService.saveFile(picture);
    const createdPost = await Post.create({ ...post, picture: fileName });
    return createdPost;
  }

  async getAll() {
    const posts = await Post.find();
    return posts;
  }

  async getOne(id) {
    const post = await Post.findById(id);
    if (!id) {
      throw new Error("Need id ...");
    }
    return post;
  }
  async update(post) {
    const updatedPost = await Post.findByIdAndUpdate(post._id, post, {
      new: true,
    });
    if (!post._id) {
      throw new Error("Need id ...");
    }
    return updatedPost;
  }

  async delete(id) {
    const post = await Post.findByIdAndDelete(id);
    if (!post._id) {
      throw new Error("Need id ...");
    }

    return post;
  }
}

export default new PostService();
