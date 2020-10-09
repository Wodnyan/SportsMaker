import supertest from "supertest";
import app from "../../app";

const testUser = {
  email: "test@test.com",
  username: "test",
  password: "test",
};

describe("POST /auth/register", () => {
  it("should respond with a message", async () => {
    const response = await supertest(app)
      .post("/auth/register")
      .send(testUser)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200);
    expect(response.body.message).toEqual("Created a User");
  });
});

describe("POST /auth/login", () => {
  it("should respond with the user", async () => {
    const response = await supertest(app)
      .post("/auth/login")
      .send(testUser)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200);
    expect(response.body.user).toMatchObject({
      id: 1,
      username: testUser.username,
      email: testUser.email,
    });
  });
});
