import "reflect-metadata";
import dotenv from "dotenv";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import "./database";

import "./shared/container";

import { AppError } from "./errors/AppError";
import { router } from "./routes";

dotenv.config();

const app = express();

app.use(express.json());

app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
    });
  }
);

app.get("/", (request: Request, response: Response) => {
  response.send("Olá mundo");
});

app.listen(process.env.PORT || 3333, () =>
  console.log("Servidor esta rodando!!!! ")
);

// postgres://testuser:test@localhost/project
