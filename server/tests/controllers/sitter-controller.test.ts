import request from "supertest"
import { app, stopServer } from "../../src/index";
import { Sitter } from "../../src/models/sitter";

describe('SitterController', () => {
  afterAll(() => Sitter.deleteMany({}))
  afterAll(() => stopServer())

  describe("getSitters", () => {
    beforeEach(async () => {
      await Sitter.create({ name: 'John Doe' })
      await Sitter.create({ name: 'Jane Doe' })
    })

    it("should return a 200 status and the sitters", async () => {
      const response = await request(app).get("/sitters");
      expect(response.statusCode).toBe(200);
      expect(response.body.data).toHaveLength(2)
      expect(response.body.data[0].name).toBe('John Doe')
      expect(response.body.data[1].name).toBe('Jane Doe')
    });
  });
  
  describe("addSitter", () => {
    const newSitter = {
      name: "martin",
      quote: "life is beautiful",
      avatar: "avatar image",
    };
  
    it("should return a 201 status with created sitter object'", async () => {
      const response = await request(app).post("/sitters").send(newSitter);
      expect(response.statusCode).toBe(201);
      expect(response.body.data.name).toEqual(newSitter.name)
      expect(response.body.data.quote).toEqual(newSitter.quote)
      expect(response.body.data.avatar).toEqual(newSitter.avatar)
    });
  });
})
