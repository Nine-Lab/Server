const errorMiddleware = async (error, req, res, next) => {
  console.log("❗" + error);
  res.status(400).send(error.message);
};

export const noExistFile = async (error, req, res, next) => {
  console.log("❗" + "해당파일이 없습니다. 다시한번 확인해 주세요.");
  res.status(400).send(error.message);
};
 
export default errorMiddleware;



