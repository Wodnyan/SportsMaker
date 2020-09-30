const Knex = require("knex");

const tableNames = {
  USER: "user",
  ENTRIES: "entries",
};

const addDefaultColumns = (table) => {
  table.timestamps(false, true);
  table.datetime("deleted_at");
};

exports.up = async (knex) => {
  //USER
  await knex.schema.createTable(tableNames.USER, (table) => {
    table.increments().notNullable();
    table.string("email", 254).notNullable().unique();
    table.string("username", 254).notNullable();
    //Hashed Password Length
    table.string("password", 60).notNullable();
    table.datetime("last_login");
    addDefaultColumns(table);
  });
  //ENTRIES
  await knex.schema.createTable(tableNames.ENTRIES, (table) => {
    table.increments().notNullable();
    table.string("title", 254).notNullable();
    table.string("description", 500).notNullable();
    table.string("proficiency", 500).notNullable();
    table.string("location", 500).notNullable();
    table.string("img_url", 2000);
    table.referneces("");
    // table.datetime("")
    addDefaultColumns(table);
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable(tableNames.USER);
  await knex.schema.dropTable(tableNames.ENTRIES);
};
