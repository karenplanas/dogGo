import * as db from "../../src/models/db";
import { Sitter, findSitters } from "../../src/models/sitter";

describe("Sitter", () => {
  beforeAll(() => db.connect())
  afterEach(() => Sitter.deleteMany({}))
  afterAll(() => db.disconnect())
  
  describe("findSitters", () => {
    describe("when there is documents in the collection", () => {
      beforeEach(async () => {
        await Sitter.create({ name: 'John Doe' })
        await Sitter.create({ name: 'Jane Doe' })
      })

      it("should return an array of Sitters", async () => {
        const result = await findSitters()

        expect(result).toHaveLength(2)
        expect(result[0].name).toBe('John Doe')
        expect(result[1].name).toBe('Jane Doe')
      })
    })

    describe("when the collection is emtpy", () => {
      it("should return an empty array", async () => {
        const result = await findSitters()

        expect(result).toEqual([])
      })
    })
  })
}) 