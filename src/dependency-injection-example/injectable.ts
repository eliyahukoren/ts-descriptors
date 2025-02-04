import { Container } from "./container";

function Injectable(key: string) {
  return function <T extends { new (...args: any[]): {} }>(constructor: T) {
    Container.register(key, new constructor());
  };
}

export { Injectable };
