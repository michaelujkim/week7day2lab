const minInteger = require("../lib/minInteger.js");
describe("Minimum Positive Integer", () => {
  describe("Array of integers", () => {
    test("should return minimum positive integer", () => {
      const result = minInteger([1, 3, 6, 4, 1, 2]);
      expect(result).toEqual(5);
    });
  });
  describe("Empty Input", () => {
    test("should return null", () => {
      const result = minInteger();
      expect(result).toEqual(null);
    });
  });
  describe("Two integers missed", () => {
    test("should only return the minimum", () => {
      const result = minInteger([1, 3, 6, 4, 1, 2, 8]);
      expect(result).toEqual(5);
    });
  });
});
