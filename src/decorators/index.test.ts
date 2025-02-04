import { ValidateNumbers } from "./";

describe("ValidateNumbers Decorator", () => {
  
  test("should allow valid numbers for class method", () => {
    class MathUtils {
      @ValidateNumbers
      multiply(a: number, b: number): number {
        return a * b;
      }
    }

    const math = new MathUtils();
    expect(math.multiply(4, 5)).toBe(20);
  });

  test("should throw an error for invalid inputs in class method", () => {
    class MathUtils {
      @ValidateNumbers
      multiply(a: number, b: number): number {
        return a * b;
      }
    }

    const math = new MathUtils();
    expect(() => math.multiply(4, "X" as any)).toThrow("Invalid argument: All arguments must be numbers");
  });

});


