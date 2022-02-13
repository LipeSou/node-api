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
exports.FitnessRepository = void 0;
const typeorm_1 = require("typeorm");
const Fitness_1 = require("../../entities/Fitness");
class FitnessRepository {
    constructor() {
        this.repository = typeorm_1.getRepository(Fitness_1.Fitness);
    }
    create({ dia, comentarios, braco, antebraco, bracoDescancando, medidaUmbigo, medidaMaior, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const fitness = this.repository.create({
                dia,
                comentarios,
                braco,
                antebraco,
                bracoDescancando,
                medidaUmbigo,
                medidaMaior,
            });
            yield this.repository.save(fitness);
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            const fitness = yield this.repository.find();
            return fitness;
        });
    }
    findByDate(dia) {
        return __awaiter(this, void 0, void 0, function* () {
            // Select * from fitness where dia = "dia" limit 1
            const fitness = yield this.repository.findOne({ dia });
            return fitness;
        });
    }
}
exports.FitnessRepository = FitnessRepository;
