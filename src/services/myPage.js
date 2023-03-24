import { model } from "mongoose";
import UserSchema from "../schemas/userSchema.js";

const User = model("users", UserSchema);

// 마이페이지
export const myPage = async( req, res ) => {
  const { email } = req.body;
  const currentUser = await User.findOne({ email });
    try {
      res.status(200).json(currentUser);
    } catch (error) {
      res.status(400).send("실패");
    }
};
// 회원 정보 수정
export const changeUser = async (req, res) => {
  const { email } = req.body;
  const user =  await User.findOne({ email});
  try {
    // // db에서 찾지 못한 경우, 에러 메시지 반환
    if (!user) {
      const errorMessage = "가입 내역이 없습니다. 다시 한 번 확인해 주세요.";
      return { errorMessage };
    }
    const updatedUser = await user.updateOne({
      email,
      phoneNumber
    });

    res.json(updatedUser);
    return updatedUser;
  } catch (error) {
    return error;
  }
};
