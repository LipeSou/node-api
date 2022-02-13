import { Router } from "express";

import { fitnessRoutes } from "./fitness.routes";
import { mannagerSeriesRoutes } from "./mannagerSeries.routes";

const router = Router();

router.use("/felipefitness", fitnessRoutes);

router.use("/mannagerseries", mannagerSeriesRoutes);

export { router };
