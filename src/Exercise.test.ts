import {greet} from "../src/Exercise";

describe("greet", () => {
    test("returns the expected greeting", () => {
      const name = "Shakesphere";
      const expected = "Hello, Shakesphere!";
      const result = greet(name);
      expect(result).toEqual(expected);
    });
  });