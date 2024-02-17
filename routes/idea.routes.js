import express from "express";
import verifyToken from "../middleware/authJwt.js";
import {
  addIdea,
  getIdeas,
  getIdeaById,
  updateIdea,
  deleteIdea,
} from "../controllers/idea.controller.js";

const router = express.Router();

router.post("/add", [verifyToken], addIdea);
router.get("/all", [verifyToken], getIdeas);
router.get("/:id", [verifyToken], getIdeaById);
router.get("/Result/:id", [verifyToken], getIdeaById);
router.put("/:id", [verifyToken], updateIdea);
router.delete("/:id", [verifyToken], deleteIdea);

export default router;
