import { model } from "mongoose";
import UserSchema from "../schemas/userSchema.js";
import bcrypt from "bcrypt";

export const User = model("users", UserSchema);

//회원 가입
export const postJoin = async (req, res) => {
  const { name, email, password, phoneNumber, address } = req.body;

  //이메일 중복확인
  const user = await User.findOne({ email });
  if (user) {
    res.status(400).send("이 이메일은 현재 사용중입니다. 다른 이메일을 입력해 주세요.");
  }

  // 패스워드 해쉬화
  const saltRounds = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  try {
    await User.create({
      name,
      email,
      password: hashedPassword,
      phoneNumber,
    });
    return res.send("회원 가입을 환영합니다.");
  } catch (error) {
    res.status(400).send(error);
  }
};

//마이 페이지
export const seeMyPage = async (req, res) => {
  //토큰에 있는 id
  const id = req.currentUserId;

  const currentUser = await User.findOne({ userId: id });
  try {
    res.status(200).json(currentUser);
  } catch (error) {
    res.status(400).send("마이 페이지 로딩에 실패하였습니다.");
  }
};

//회원 정보 수정
export const changeUser = async (req, res) => {
  const { name, email,  phoneNumber} = req.body;
  const userId = req.currentUserId;
  const user = await User.findOne({ userId });

  try {
    // // db에서 찾지 못한 경우, 에러 메시지 반환
    if (!user) {
      const errorMessage = "가입 내역이 없습니다. 다시 한 번 확인해 주세요.";
      return { errorMessage };
    }
    const updatedUser = await user.updateOne({
      name,
      email,
      phoneNumber,
    });

    res.json(updatedUser);
    return updatedUser;
  } catch (error) {
    return error;
  }
};

//회원탈퇴
export const deleteUser = async (req, res) => {
  //토큰으로 유저 찾기
  const userId = req.currentUserId;
  const user = await User.findOne({ userId });

  const { password } = req.body;

  // //1번째는 프론트에서 가져온 비밀번호, 2번째는 db비밀번호
  const comparePassword = bcrypt.compareSync(password, user.password);

  if (!comparePassword) {
    res.status(404).json({ message: "비밀번호가 일치하지 않습니다" });
    return;
  }

  try {
    //찾은 유저의 비밀번호를 삭제
    await user.deleteOne({ password: user.password });
    console.log("삭제완료");
    res.json({ message: "안전하게 삭제 완료했습니다." });
  } catch (error) {
    res.json({ message: "삭제에 실패했습니다.", error });
  }
};