"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMannagerSeriesController = void 0;
const tsyringe_1 = require("tsyringe");
const CreateMannagerSeriesUseCase_1 = require("./CreateMannagerSeriesUseCase");
class CreateMannagerSeriesController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, numberEpisode, numberFinish } = request.body;
            const createMannagerSeriesUseCase = tsyringe_1.container.resolve(CreateMannagerSeriesUseCase_1.CreateMannagerSeriesUseCase);
            yield createMannagerSeriesUseCase.execute({
                name,
                numberEpisode,
                numberFinish,
            });
            return response.status(201).send();
        });
    }
}
exports.CreateMannagerSeriesController = CreateMannagerSeriesController;
