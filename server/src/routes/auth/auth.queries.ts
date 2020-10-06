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
  getUserInfo(userId: number) {
    return db("user").where({ id: userId }).first();
  },
  deleteUser(userId: number) {
    return db("user").where({ id: userId }).del();
  },
  updateUser(userId: number, update: Update) {
    return db("user").where({ id: userId }).update(update);
  },
};
