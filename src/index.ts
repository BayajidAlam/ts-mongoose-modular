import { app } from "./app";
import { log } from "./app/utils/logger";
import "dotenv/config";
const { PORT } = process.env;

const startServer = async (): Promise<void> => {
  try {
    app.listen(PORT, () => {
      log.info("Server started");
    });
  } catch (err: any) {
    log.error(err.message);
  }
};

startServer();