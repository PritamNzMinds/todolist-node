import express from "express"
import { Auth } from "../middleware/auth.js";
import { addTodoTask, completeTask, deleteTask, getTodoTask, updateTask } from "../controller/task.controller.js";

const taskRouter=express.Router()

// taskRouter.use(Auth);

taskRouter.get("/task/",Auth,getTodoTask);
taskRouter.post("/task/add",Auth,addTodoTask);
taskRouter.put("/task/markcomplete/:id",Auth,completeTask);
taskRouter.put("/task/update/:id",Auth,updateTask);
taskRouter.delete("/task/delete/:id",Auth,deleteTask);




export default taskRouter;