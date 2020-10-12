import knex from "knex";
//Need to use commonjs because otherwise ts complains about type definitions
const knexConfig = require("../knexfile");
import { Model } from "objection";

const environmnet = process.env.NODE_ENV || "development";
const connectionConfig = knexConfig[environmnet];
const connection = knex(connectionConfig);
Model.knex(connection);
export default connection;
