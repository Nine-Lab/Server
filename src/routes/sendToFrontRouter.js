import express from "express";
import { findDust, ultraFineDust, flooding, housingSatisaction } from "../services/sendToFrontService.js";

const sendToFrontRouter = express.Router();

// 미세먼지 json요청
sendToFrontRouter.get("/files/finedust", findDust);

// 초 미세먼지 json요청
sendToFrontRouter.get("/files/ultrafinedust", ultraFineDust);

// 침수 json요청
sendToFrontRouter.get("/files/flooding", flooding);

// 주거만족 json요청
sendToFrontRouter.get("/files/housingSatisfaction", housingSatisaction);

export default sendToFrontRouter ;
