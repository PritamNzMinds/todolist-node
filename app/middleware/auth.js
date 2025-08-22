import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { sendError } from "../helper/response.js";

export const hashPassword = (password) => {
  try {
    const salt = 10;
    const hashedpassword = bcrypt.hashSync(password, salt);
    return hashedpassword;
  } catch (error) {
    return sendError(res,"Internal Server Error",error,500);
  }
};

export const comparePassword = (password, hashedpassword) => {
  return bcrypt.compare(password, hashedpassword);
};

export const Auth = async (req, res, next) => {
  const token =
    req.body?.token ||
    req.query?.token ||
    req.headers["x-access-token"]

  if (!token) {
    return sendError(res,"Token is required for access this page",null,401);
  }
  try {
    const decode = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decode;
  } catch (error) {
    return sendError(res,"Invalid token",error,401);
  }
  return next();
};
