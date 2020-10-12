import { Model } from "objection";
import schema from "./users.schema.json";

console.log(schema);

class User extends Model {
  static get tableName() {
    return "user";
  }
  static get jsonSchema() {
    return schema;
  }
}

export default User;
