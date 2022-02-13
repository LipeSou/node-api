"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const FitnessRepository_1 = require("../../modules/fitness/repositories/implementations/FitnessRepository");
const MannagerSeriesRepository_1 = require("../../modules/mannagerSeries/repositories/implementations/MannagerSeriesRepository");
tsyringe_1.container.registerSingleton("FitnessRepository", FitnessRepository_1.FitnessRepository);
tsyringe_1.container.registerSingleton("MannagerSeriesRepository", MannagerSeriesRepository_1.MannagerSeriesRepository);
