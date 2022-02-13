import { Router } from "express";

import { CreateFitnessControler } from "../modules/fitness/useCases/createFitness/CreateFitnessController";
import { ListFitnessController } from "../modules/fitness/useCases/ListFitness/ListFitnessController";

const fitnessRoutes = Router();

const createFitnessController = new CreateFitnessControler();
const listFitnessController = new ListFitnessController();

fitnessRoutes.post("/", createFitnessController.handle);

fitnessRoutes.get("/", listFitnessController.handle);

export { fitnessRoutes };
