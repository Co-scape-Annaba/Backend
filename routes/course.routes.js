import express from "express";
import verifyToken from "../middleware/authJwt.js";
import {
  addCourse,
  getCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
} from "../controllers/course.controller.js";

const router = express.Router();

router.post("/add", [verifyToken], addCourse);
router.get("/all", [verifyToken], getCourses);
router.get("/:id", [verifyToken], getCourseById);
router.put("/:id", [verifyToken], updateCourse);
router.delete("/:id", [verifyToken], deleteCourse);

export default router;
