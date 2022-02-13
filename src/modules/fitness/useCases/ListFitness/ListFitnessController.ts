import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListFitnessUseCase } from "./ListFitnessUseCase";

class ListFitnessController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listFitnessUseCase = container.resolve(ListFitnessUseCase);
    const all = await listFitnessUseCase.execute();

    return response.json(all);
  }
}

export { ListFitnessController };
