"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
require("express-async-errors");
require("./database");
require("./shared/container");
const AppError_1 = require("./errors/AppError");
const routes_1 = require("./routes");
dotenv_1.default.config();
const app = express_1.default();
app.use(express_1.default.json());
app.use(routes_1.router);
app.use((err, request, response, next) => {
    if (err instanceof AppError_1.AppError) {
        return response.status(err.statusCode).json({
            message: err.message,
        });
    }
    return response.status(500).json({
        status: "error",
        message: `Internal server error - ${err.message}`,
    });
});
app.get("/", (request, response) => {
    response.send("Olá mundo");
});
app.listen(process.env.PORT || 3333, () => console.log("Servidor esta rodando!!!! "));
// postgres://testuser:test@localhost/project
