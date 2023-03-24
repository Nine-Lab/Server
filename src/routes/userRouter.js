import express from "express";
import { userController } from "../controllers/userController.js";
import { myPage } from "../services/myPage.js";

const userRouter = express.Router();

// 회원가입
userRouter.post("/users/register", userController.register);

// 로그인
userRouter.post("/users/login", userController.login);

// 마이페이지
userRouter.post("/users/mypage", myPage);

export default userRouter;
