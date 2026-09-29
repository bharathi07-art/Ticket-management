import jwt from "jsonwebtoken";
const generateTokens = async (id) => {
  return jwt.sign({ id }, process.env.JWT_TOKEN, { expiresIn: "30d" });
};
export default generateTokens;
