import { Container } from "./container";
import { Injectable } from "./injectable";
import { Inject } from "./inject";

// Mock Service
@Injectable("MockService")
class MockService {
  getMessage(): string {
    return "Mock service response";
  }
}

// Class using Dependency Injection
class TestClass {
  @Inject("MockService")
  private mockService!: MockService;

  getServiceMessage(): string {
    return this.mockService.getMessage();
  }
}

describe("Dependency Injection with Property Descriptors", () => {

  test("should register and resolve a service", () => {
    const instance = Container.resolve<MockService>("MockService");
    expect(instance).toBeInstanceOf(MockService);
    expect(instance.getMessage()).toBe("Mock service response");
  });

  test("should inject the registered service into a class property", () => {
    const testInstance = new TestClass();
    expect(testInstance.getServiceMessage()).toBe("Mock service response");
  });

  test("should throw an error if trying to resolve an unregistered service", () => {
    expect(() => Container.resolve("UnknownService")).toThrow("No provider found for key: UnknownService");
  });

});
