import supertest from "supertest";
import app from "../../app";
import { Entry } from "../../types";

const testEntry = {
  title: "Basketball",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  proficiency: "beginner",
  location: "Sfantu Gheorghe",
  img_url:
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.JIwySkezIVVYdoT2DlUnogHaHa%26pid%3DApi&f=1",
  user_id: 1,
} as Entry;

describe("GET /api/v1/entries before any data", () => {
  it("should respond with an empty array", async () => {
    const response = await supertest(app).get("/api/v1/entries").expect(200);
    expect(response.body.entries).toEqual([]);
    expect(response.body.message).toEqual("All Entries");
  });
});

describe("POST /api/v1/entries", () => {
  it("should respond with a message", async () => {
    const response = await supertest(app)
      .post("/api/v1/entries")
      .send(testEntry)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(201);
    expect(response.body.message).toEqual("New Entry");
  });
});
