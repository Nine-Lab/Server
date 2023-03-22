import express from "express";
import { userController } from "../controllers/userController.js";
import { postJoin, seeMyPage, changeUser, deleteUser} from "../db/models/userModel.js";
import { loginRequired } from "../middleware/loginRequired.js";

const userRouter = express.Router();

// 회원가입
userRouter.post("/users/register", userController.register);

// 로그인
userRouter.post("/users/login", userController.login);

// 회원가입(다른방식)
userRouter.post("/users/signin", postJoin);

// 마이페이지
userRouter.get("/users/mypage",  loginRequired, seeMyPage);

// 회원정보 수정
userRouter.post("/users/edit/:userId", loginRequired, changeUser);

// 회원정보 삭제
userRouter.delete("/users/delete/:userId", loginRequired,  deleteUser);

export default userRouter;

