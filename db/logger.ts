import { DefaultLogger, LogWriter } from "drizzle-orm/logger";

class MyLogWriter implements LogWriter {
  write(message: string) {
    console.log(`[${new Date(Date.now()).getSeconds()}]: ${message}`);
  }
}

export const logger = new DefaultLogger({ writer: new MyLogWriter() });
