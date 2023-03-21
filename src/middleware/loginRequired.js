import jwt from "jsonwebtoken";

const loginRequired = (req, res, next) => {
  // request 헤더로부터 토큰을 받음. split(" ")이유는 공란으로 구분되게 설계되어 있음.
  const userToken = req.headers.authorization.split(" ")[1];

  if ( userToken === undefined) {
    res.status(400).json({
      error: "로그인이 필요 서비스입니다.",
      data: null,
    });
    return;
  }
  // 토큰검증, 해당 token이 정상적인 token인지 확인 -> 토큰에 담긴 userId 정보 추출
  try {
    const secretKey = process.env.JWT_SECRET_KEY || "secret-key";
    if (!userToken || userToken === "null") {
      res.status(401).json({
        result: "forbidden-approach",
        reason: "로그인한 유저만 사용할 수 있는 서비스입니다.",
      });
      return;
    }
    const jwtDecoded = jwt.verify(userToken, secretKey);
    const userId = jwtDecoded.userId;
    res.locals.user = userId;

    next();
  } catch (error) {
    res.status(401).json({
      result: "forbidden-approach",
      reason: "정상적인 토큰이 아닙니다.",
    });
    return;
  }
};


export default loginRequired;


