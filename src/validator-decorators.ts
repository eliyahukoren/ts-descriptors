import { ValidateNumbers } from "./decorators";

class MathUtils {
  @ValidateNumbers
  multiply(a: number, b: number): number {
    return a * b;
  }
}

const math = new MathUtils();

try {
  console.log(math.multiply(4, 5));  // ✅ Valid input
  console.log(math.multiply(4, "X" as any)); // ❌ Invalid input
} catch (error: any) {
  console.error(error.message);
}