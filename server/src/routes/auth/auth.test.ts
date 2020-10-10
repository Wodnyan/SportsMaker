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
      .expect(201);
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
    expect(response.body.message).toEqual("Successful Authentication");
  });
});

describe("PATCH /auth/1", () => {
  it("should respond with a message containing the user id and with the updated user", async () => {
    const response = await supertest(app)
      .patch("/auth/1")
      .send({ username: "updated", email: "updated@updated.com" })
      .expect("Content-Type", /json/)
      .expect(200);
    expect(response.body.message).toEqual("Updated user with the id of 1");
    expect(response.body.updated).toMatchObject({
      id: 1,
      username: "updated",
      email: "updated@updated.com",
    });
  });
});

describe("DELETE /auth/1", () => {
  it("should respond with a message containing the user id", async () => {
    const response = await supertest(app)
      .delete("/auth/1")
      .expect("Content-Type", /json/)
      .expect(200);
    expect(response.body.message).toEqual("Deleted user with the id of 1");
  });
});
