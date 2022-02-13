import { container } from "tsyringe";

import { IFitnessRepository } from "../../modules/fitness/repositories/IFitnessRepository";
import { FitnessRepository } from "../../modules/fitness/repositories/implementations/FitnessRepository";
import { IMannagerSeriesRepository } from "../../modules/mannagerSeries/repositories/IMannagerSeriesRepository";
import { MannagerSeriesRepository } from "../../modules/mannagerSeries/repositories/implementations/MannagerSeriesRepository";

container.registerSingleton<IFitnessRepository>(
  "FitnessRepository",
  FitnessRepository
);

container.registerSingleton<IMannagerSeriesRepository>(
  "MannagerSeriesRepository",
  MannagerSeriesRepository
);
