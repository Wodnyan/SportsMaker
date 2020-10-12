import db from "../../db";
import { Entry, User } from "../../types";

export default {
  find() {
    return db("entries");
  },
  getById(id: number) {
    return db("entries").where({ id }).first();
  },
  insert(entry: Entry) {
    return db("entries").insert(entry);
  },
  deleteEntry(id: number) {
    return db("entries").where({ id }).del();
  },
};
