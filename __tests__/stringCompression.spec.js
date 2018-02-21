const stringCompression = require("../lib/stringCompression.js");

describe("String Compression test", () => {
  describe("one of one character", () => {
    test("should return character with 1 behind it", () => {
      const result = stringCompression("ab");
      expect(result).toEqual("a1b1");
    });
  });

  describe("full string", () => {
    test("should return compressed string", () => {
      const result = stringCompression("aaabbc");
      expect(result).toEqual("a3b2c1");
    });
  });

  describe("empty input", () => {
    test("should return 0", () => {
      const result = stringCompression();
      expect(result).toEqual(0);
    });
  });
  describe("not a string", () => {
    test("should return error", () => {
      const result = stringCompression(1234);
      expect(result).toEqual("Error");
    });
  });

  describe("spaces", () => {
    test("spaces should be counted", () => {
      const result = stringCompression("aaa bb c");
      expect(result).toEqual("a3 1b2 1c1");
    });
  });
});
