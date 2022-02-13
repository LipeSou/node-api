import dotenv from "dotenv";
import { createConnection } from "typeorm";

dotenv.config();

const rootDir = process.env.NODE_ENV === "development" ? "src" : "dist";
const extensionFile = process.env.NODE_ENV === "development" ? "ts" : "js";

const config: any = {
  type: "postgres",
  host: process.env.TYPEORM_HOST,
  port: process.env.TYPEORM_PORT,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  synchronize: false,
  extra: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  migrations: [`./${rootDir}/database/migrations/*.${extensionFile}`],
  entities: [
    `${rootDir}/modules/fitness/entities/*`,
    `${rootDir}/modules/mannagerSeries/entities/*`,
  ],
  cli: {
    migrationsDir: `./${rootDir}/database/migrations`,
  },
};

createConnection(config).catch((err) => console.log(err));
