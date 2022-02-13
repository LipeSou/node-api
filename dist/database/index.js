"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const typeorm_1 = require("typeorm");
dotenv_1.default.config();
const rootDir = process.env.NODE_ENV === "development" ? "src" : "dist";
const extensionFile = process.env.NODE_ENV === "development" ? "ts" : "js";
const config = {
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
typeorm_1.createConnection(config).catch((err) => console.log(err));
