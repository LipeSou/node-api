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
exports.MannagerSeriesRepository = void 0;
const typeorm_1 = require("typeorm");
const MannageSeries_1 = require("../../entities/MannageSeries");
class MannagerSeriesRepository {
    constructor() {
        this.repository = typeorm_1.getRepository(MannageSeries_1.MannagerSeries);
    }
    create({ name, numberEpisode, numberFinish, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const mannagerSeries = this.repository.create({
                name,
                numberEpisode,
                numberFinish,
            });
            yield this.repository.save(mannagerSeries);
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            const mannagerSeries = yield this.repository.find();
            return mannagerSeries;
        });
    }
}
exports.MannagerSeriesRepository = MannagerSeriesRepository;
