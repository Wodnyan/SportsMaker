import db from "../../db";
import { User } from "../../types";

interface Update {
  emai?: string;
  username?: string;
  password?: string;
}

export default {
  addNewUser(user: User) {
    return db("user").insert(user);
  },
  getUserInfoById(userId: number) {
    return db("user").where({ id: userId }).first();
  },
  getUserInfo(user: User) {
    return db("user").where({ email: user.email }).first();
  },
  checkUserCreds(user: User) {
    return db("user")
      .where({ email: user.email, password: user.password })
      .first();
  },
  deleteUser(userId: number) {
    return db("user").where({ id: userId }).del();
  },
  async updateUser(userId: number, update: Update) {
    await db("user").where({ id: userId }).update(update);
    return this.getUserInfoById(userId);
  },
};
