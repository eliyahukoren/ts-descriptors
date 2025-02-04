import "reflect-metadata";

class Container {
  private static instances = new Map<string, any>();

  static register<T>(key: string, instance: T): void {
    this.instances.set(key, instance);
  }

  static resolve<T>(key: string): T {
    const instance = this.instances.get(key);
    if (!instance) {
      throw new Error(`No provider found for key: ${key}`);
    }
    return instance;
  }
}

export { Container };
