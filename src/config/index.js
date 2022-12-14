import minimist from "minimist";
import dotenv from "dotenv";
dotenv.config();

const args = minimist(process.argv);

export default {
  NODE_ENV: process.env.NODE_ENV || "development",
  MONGO_ATLAS_SRV: process.env.MONGO_ATLAS_SRV || "mongoSRV",
  TOKEN_JWT_SECRET_KEY: process.env.TOKEN_SECRET_KEY || "nestor-secret-key",
  PORT: process.env.PORT || 5000,
  PERSISTENCE: args.persistence,
  GMAIL_EMAIL: process.env.GMAIL_EMAIL || 'emaildenestor@gmail.com',
  GMAIL_PASSWORD: process.env.GMAIL_PASSWORD || 'password',
  GMAIL_NAME: process.env.GMAIL_NAME || 'GMAIL owner name',
};
