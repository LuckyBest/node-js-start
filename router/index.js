import { Router } from "express";
import { PostManager } from "../Controllers/post-manager.js";

const router = new Router();
const postDataManager = new PostManager();

router.post("/posts", postDataManager.create);
router.get("/posts", postDataManager.getAll);
router.get("/posts/:id", postDataManager.getOne);
router.put("/posts", postDataManager.update);
router.delete("/posts/:id", postDataManager.delete);

export { router };
