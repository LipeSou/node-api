import { Router } from "express";

import { CreateMannagerSeriesController } from "../modules/mannagerSeries/useCases/createMannagerSeries/CreateMannagerSeriesController";
import { ListMannagerSeriesController } from "../modules/mannagerSeries/useCases/listMannagerSeries/ListMannagerSeriesController";

const mannagerSeriesRoutes = Router();

const createMannagerSeriesController = new CreateMannagerSeriesController();
const listMannagerSeriesController = new ListMannagerSeriesController();

mannagerSeriesRoutes.post("/", createMannagerSeriesController.handle);
mannagerSeriesRoutes.get("/", listMannagerSeriesController.handle);

export { mannagerSeriesRoutes };
