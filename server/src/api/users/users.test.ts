import supertest from "supertest";
import app from "../../app";

const testUser = {
  email: "test@test.com",
  username: "test",
  password: "test",
};

describe("POST /api/v1/users/register", () => {
  it("should respond with a message", async () => {
    const response = await supertest(app)
      .post("/api/v1/users/register")
      .send(testUser)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(201);
    expect(response.body.message).toEqual("Created a User");
  });
});

describe("GET /api/v1/users", () => {
  it("should respond with the users", async () => {
    const response = await supertest(app).get("/api/v1/users").expect(200);
    expect(response.body.length).toBeGreaterThan(0);
  });
});
describe("POST /api/v1/users/login", () => {
  it("should respond with the user", async () => {
    const response = await supertest(app)
      .post("/api/v1/users/login")
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

describe("PATCH /api/v1/users/1", () => {
  it("should respond with a message containing the user id and with the updated user", async () => {
    const response = await supertest(app)
      .patch("/api/v1/users/1")
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

describe("DELETE /api/v1/users/1", () => {
  it("should respond with a message containing the user id", async () => {
    const response = await supertest(app)
      .delete("/api/v1/users/1")
      .expect("Content-Type", /json/)
      .expect(200);
    expect(response.body.message).toEqual("Deleted user with the id of 1");
  });
});
