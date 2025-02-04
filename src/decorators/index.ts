export function ValidateNumbers(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalFunction = descriptor.value;

  descriptor.value = function (...args: any[]) {
    if (args.some(arg => typeof arg !== 'number' || isNaN(arg))) {
      throw new Error(`Invalid argument: All arguments must be numbers`);
    }
    return originalFunction.apply(this, args);
  };
}

export function Controller(target: Function) {
  console.log(`Registered class: ${target.name}`);
}

export function LogFunction(target: Function, propertyKey?: string, descriptor?: PropertyDescriptor) {
  return function (...args: any[]) {
    console.log(`Calling function with arguments:`, args);
    const result = target(...args);
    console.log(`Function returned:`, result);
    return result;
  };
}

export function LogMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${propertyKey} with args:`, args);
    return originalMethod.apply(this, args);
  };
}

export function ReadonlyProperty(target: any, propertyKey: string) {
  Object.defineProperty(target, propertyKey, {
    writable: false,
    configurable: false
  });
}
