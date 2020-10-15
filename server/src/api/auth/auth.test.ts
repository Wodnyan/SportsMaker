import app from "../../app";
import supertest from "supertest";

const testUser = {
  email: "test@test.com",
  username: "test",
  password: "test",
};

describe("POST /api/v1/users/signup", () => {
  it("should respond with a message", async () => {
    const response = await supertest(app)
      .post("/api/v1/users/signup")
      .send(testUser)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(201);
    expect(response.body.message).toEqual("Created a User");
  });
  it("should respond with 409 error if email is already in use", async () => {
    const response = await supertest(app)
      .post("/api/v1/users/signup")
      .send(testUser)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(201);
    expect(response.body.message).toEqual("Created a User");
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
  it("should respond with 404 error if no user is found", async () => {
    const problematicUser = testUser;
    problematicUser.email = "incorrectEmail@test.com";
    const response = await supertest(app)
      .post("/api/v1/users/login")
      .send(problematicUser)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(404);
  });
  it("should respond with 401 error if password is incorrect", async () => {
    const problematicUser = testUser;
    problematicUser.password = "incorrect_password";
    const response = await supertest(app)
      .post("/api/v1/users/login")
      .send(problematicUser)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(401);
  });
});
