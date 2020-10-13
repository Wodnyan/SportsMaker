import { Model } from "objection";
import schema from "./users.schema.json";

class User extends Model {
  static get tableName() {
    return "user";
  }
  static get jsonSchema() {
    return schema;
  }
}

export default User;
