const request = require("supertest");
const { app } = require("../index");

describe("getSitters", () => {
  it("should return a 200 status and the sitters", async () => {
    const response = await request(app).get("/sitters");
    expect(response.statusCode).toBe(200);
  });
});

describe("addSitter", () => {
  let newSitter;

  beforeEach(() => {
    newSitter = {
      name: "martin",
      quote: "life is beautiful",
      avatar: "avatar image",
    };
  });
  it("should return a 201 status with created sitter object'", async () => {
    const response = await request(app).post("/sitters").send(newSitter);
    expect(response.statusCode).toBe(201);
  });
});

//
