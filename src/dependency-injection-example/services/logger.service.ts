import { Injectable } from "../injectable";

@Injectable("LoggerService")
class LoggerService {
  log(message: string): void {
    console.log(`[Logger] ${message}`);
  }
}

export { LoggerService };
