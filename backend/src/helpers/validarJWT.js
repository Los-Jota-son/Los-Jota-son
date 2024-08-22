import jwt from "jsonwebtoken";
import { newConnection } from "../database/db.js";

export const validarJWT = async (token) => {
  try {
    const { id } = jwt.verify(token, "mysecret");

    const connection = await newConnection();

    const [user] = await connection.query(
      "SELECT * FROM users WHERE id=? LIMIT 1",
      id
    );

    if (!user) {
      return false;
    } else {
      return user[0];
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};