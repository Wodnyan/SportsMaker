import supertest from "supertest";
import app from "../../app";

const testUser = {
  emai: "foo@bvadfar.com",
  username: "foo",
  password: "bar",
};

describe("POST /auth", () => {
  it("should respond with the created user", async () => {
    const response = await supertest(app)
      .post("/auth")
      .send(testUser)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200);
    expect(response.body.message).toEqual("Created a User");
  });
});

describe("GET /auth/3", () => {
  it("should respond with a user", async () => {
    const response = await supertest(app)
      .get("/auth/3")
      .expect("Content-Type", /json/)
      .expect(200);
    expect(response.body.user.username).toEqual("foo");
  });
});
