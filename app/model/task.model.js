import mongoose from "mongoose";
import Joi from "joi";

export const taskSchemaValidation = Joi.object({
  title: Joi.string().min(3).max(30).required(),
});

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const Task = mongoose.model("Task", taskSchema);
