import { sendError, sendSuccess } from "../helper/response.js";
import { comparePassword, hashPassword } from "../middleware/auth.js";
import { User, userSchemaValidation } from "../model/user.model.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { name, email, phone, country, password } = req.body;
    const {error}=await userSchemaValidation.validate(req.body);
    if(error){
      return sendError(res, error.message, null, 400);
    }
    const user = await User.findOne({ email });
    if (user) {
      return sendError(res, "User already registered", null, 400);
    }

    const hashedPassword = await hashPassword(password);

    const newUser = new User({
      name,
      email,
      phone,
      country,
      password: hashedPassword,
    });
    const data = await newUser.save();
    return sendSuccess(res, "User registration successfully done", data, 200);
  } catch (error) { 
    return sendError(res, "Internal Server Error", error, 500);
  }
};
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return sendError(res, "All fields are required", null, 400);
    }
    const user = await User.findOne({ email });
    if (!user) {
      return sendError(res, "No account found with this email address", null, 400);
    }
    const isPassword = await comparePassword(password, user.password);
    if (!isPassword) {
      return sendError(res,"The password you entered is incorrect.", null, 400);
    }
    const token = jwt.sign({ user }, process.env.SECRET_KEY, {
      expiresIn: "14m",
    });

    return sendSuccess(res,"Login sucess",token,200)
  } catch (error) {
    return sendError(res, "Internal Server Error", error, 500);
  }
};
