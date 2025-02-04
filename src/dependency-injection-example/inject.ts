import { Container } from "./container";

function Inject(key: string) {
  return function (target: any, propertyKey: string) {
    Object.defineProperty(target, propertyKey, {
      get: () => Container.resolve(key),
      enumerable: true,
      configurable: false
    });
  };
}

export { Inject };
