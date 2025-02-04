# TypeScript Decorators Example

## Dependency Injection Example
This project includes a lightweight DI system using property descriptors:
1. **`Container`** stores and resolves dependencies.
2. **`@Injectable`** registers a class instance in the container.
3. **`@Inject`** injects dependencies into class properties.

Example usage:
```typescript
class App {
  @Inject("LoggerService")
  private logger!: LoggerService;

  run() {
    this.logger.log("Application started!");
  }
}

const app = new App();
app.run();
```

## License
MIT License

