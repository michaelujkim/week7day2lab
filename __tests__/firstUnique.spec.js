const firstUnique = require("../lib/firstUnique.js");

describe("First Unique Character", () => {
  describe("one of one character", () => {
    test("should return first character", () => {
      const result = firstUnique("ab");
      expect(result).toEqual("a");
    });
  });
  describe("one unique character after serveral same", () => {
    test("should return first unique character", () => {
      const result = firstUnique("aaab");
      expect(result).toEqual("b");
    });
  });
  describe("Repeated Character letter in string", () => {
    test("should disregard repeated letter", () => {
      const result = firstUnique("frof");
      expect(result).toEqual("r");
    });
  });
  describe("Empty", () => {
    test("should return null", () => {
      const result = firstUnique();
      expect(result).toEqual(null);
    });
  });
  describe("only repeated letters", () => {
    test("should return null", () => {
      const result = firstUnique("ttttt");
      expect(result).toEqual(null);
    });
  });
});
