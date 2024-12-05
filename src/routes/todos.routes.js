import express from "express";
import {
  addTodo,
  deleteTodo,
  edittodo,
  getAllTodos,
  getTodoWithId,
} from "../controllers/todos.controllers.js";

const router = express.Router();

router.post("/todo", addTodo);
router.get("/todos", getAllTodos);
router.get("/todo/:id", getTodoWithId);
router.delete("/todo/:id", deleteTodo);
router.put("/todos/:id", edittodo);

export default router;
