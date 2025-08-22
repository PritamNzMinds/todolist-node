import { sendError, sendSuccess } from "../helper/response.js";
import { Task, taskSchemaValidation } from "../model/task.model.js";

export const addTodoTask=async(req, res)=>{
    try {
      const { title } = req.body;
      const {error,value}=await taskSchemaValidation.validate(req.body);
      if(error){
        return sendError(res,error.message,null,400);
      }
      const newTask = new Task({ title });
      const data = await newTask.save();
      return sendSuccess(res,"Task Add Successfull",data,201);
    } catch (error) {
      return sendError(res,"Internal Server Error",error,500);
    }
  }

export const getTodoTask=async(req, res)=>{
    try {
      const tasks = await Task.find({});
      return sendSuccess(res,"Task fetch successfully done",tasks,200);
    } catch (error) {
      return sendError(res,"Internal Server Error",error,500);
    }
  }

export const completeTask=async(req, res)=>{
    try {
      const id = req.params.id;
      const task = await Task.findById(id);
      if (!task) {
        return sendError(res,"Task not found",null,404);
      }
      const completedTask = await Task.findByIdAndUpdate(
        id,
        { isCompleted: true },
        { new: true }
      );
      return sendSuccess(res,"Task Completed mark done",completeTask,200);
    } catch (error) {
      return sendError(res,"Internal Server Error",error,500);
    }
  }
export const updateTask=async(req, res)=>{
    try {
      const id = req.params.id;
      const task = await Task.findById(id);
      if (!task) {
        return sendError(res,"Task not found",null,404);
      }
      const { title } = req.body;
      const updateData = await Task.findByIdAndUpdate(
        id,
        { title },
        { new: true }
      );
      return sendSuccess(res,"Update successfully done",updateData,200);
    } catch (error) {
      return sendError(res,"Internal Server Error",error,500);
    }
  }
export const deleteTask=async (req, res)=>{
    try {
      const id = req.params.id;
      const task = await Task.findById(id);
      if (!task) {
        return sendError(res,"Task not found",null,404);
      }
      await Task.findByIdAndDelete(id);
      return sendSuccess(res,"Task Deleted successfully done",null,200);
    } catch (error) {
      return sendError(res,"Internal Server Error",error,500);
    }
  }

