import express from "express";
import { reviewController } from "../controllers/reviewController.js";
// import { loginRequired } from "../middleware/loginRequired.js";

const reviewRouter = express.Router();

/**
 * @swagger
 * paths:
 *  /api/review:
 *    post:
 *      summary: "리뷰 등록"
 *      description: "POST 방식으로 유저 등록"
 *      tags: [Reviews]
 *      requestBody:
 *        description: "사용자가 서버에 전달하는 값에 따라 결과값 상이(리뷰 등록)"
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                userId:
 *                  type: number 
 *                  description: "유저 아이디"
 *                guId:
 *                  type: string 
 *                  description: "자치구 아이디"
 *                dongId:
 *                  type: string 
 *                  description: "행정동 아이디"
 *                title:
 *                  type: string 
 *                  description: "리뷰 제목"
 *                content:
 *                  type: string 
 *                  description: "리뷰 내용"
 *                satisfactionLevel:
 *                  type: number 
 *                  description: "만족도"
 *              example:
 *                [{ "userId": "objectId", "guId": "종로구", "dongId": "혜화동", "title": "조용한 동네", "content": "안정감 있는 동네", "satisfactionLevel": "5"}]        
 *      responses:
 *        200:
 *          description: register success
 *        404:
 *          description: NotFound
 *        500:
 *          description: Server Error 
 */

// 리뷰 등록
reviewRouter.post("/reviews", reviewController.addReview);

/**
 * @swagger
 * paths:
 *  /api/reviews:
 *    get:
 *      summary: "전체 리뷰 조회"
 *      description: "서버에 데이터를 보내지 않고 GET 방식으로 요청"
 *      tags: [Reviews]
 *      responses:
 *        200:
 *          description: loading success
 *        404:
 *          description: NotFound
 *        500:
 *          description: Server Error 
 */

// 리뷰 전체 조회
reviewRouter.get("/review", reviewController.getReviews);

/**
 * @swagger
 * paths:
 *  /api/review/:reviewId:
 *    put:
 *      summary: "리뷰 수정"
 *      description: "PUT 방식을 통해 리뷰 수정"
 *      tags: [Reviews]
 *      requestBody:
 *        description: 리뷰 수정
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                userId:
 *                  type: objectId 
 *                  description: "유저 아이디"
 *                guId:
 *                  type: string 
 *                  description: "자치구 아이디"
 *                dongId:
 *                  type: string 
 *                  description: "행정동 아이디"
 *                title:
 *                  type: string 
 *                  description: "리뷰 제목"
 *                content:
 *                  type: string 
 *                  description: "리뷰 내용"
 *                satisfactionLevel:
 *                  type: number 
 *                  description: "만족도"
 *              example:
 *                [{ "userId": "objectId", "guId": "종로구", "dongId": "혜화동", "title": "조용한 동네라서 강추합니다.", "content": "심심하긴 해요!", "satisfactionLevel": "5"}] 
 *      responses:
 *        200:
 *          description: corrected success
 *        404:
 *          description: NotFound
 *        500:
 *          description: Server Error  
 */

// 리뷰 수정
reviewRouter.put(
  "/review/:reviewId",
  // loginRequired,
  reviewController.updateReview,
);

/**
 * @swagger
 * paths:
 *  /api/review/:reviewId:
 *    delete:
 *      summary: "특정 리뷰 삭제"
 *      description: "요청 경로에 값을 담아 서버로 전송"
 *      tags: [Reviews]
 *      parameters:
 *        - in: path
 *          name: reviewId
 *          required: true
 *          description: 리뷰 아이디
 *          schema:
 *            type: objectId
 *      responses:
 *        200:
 *          description: delete success
 *        404:
 *          description: NotFound
 *        500:
 *          description: Server Error 
 */

// 리뷰 삭제
reviewRouter.delete(
  "/review/:reviewId",
  // loginRequired,  로그인 필요 테스트 위해 주석 처리 !
  reviewController.deleteReview,
);

export default reviewRouter;
