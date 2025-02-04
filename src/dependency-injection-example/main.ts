import { Inject } from "./inject";
import { LoggerService } from "./services/logger.service";

class App {
  @Inject("LoggerService")
  private logger!: LoggerService;

  run() {
    this.logger.log("Application started!");
  }
}

const app = new App();
app.run();
