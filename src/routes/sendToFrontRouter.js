import express from "express";
import { findDust, ultraFineDust } from "../services/sendToFrontService.js";

const sendToFrontRouter = express.Router();

// 미세먼지 json요청
sendToFrontRouter.get("/files/finedust", findDust);

// 초 미세먼지 json요청
sendToFrontRouter.get("/files/ultrafinedust", ultraFineDust);

export default sendToFrontRouter;