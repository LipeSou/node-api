import { Request, Response } from "express";
import { container } from "tsyringe";

import { MannagerSeries } from "../../entities/MannageSeries";
import { CreateMannagerSeriesUseCase } from "./CreateMannagerSeriesUseCase";

class CreateMannagerSeriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, numberEpisode, numberFinish }: MannagerSeries = request.body;

    const createMannagerSeriesUseCase = container.resolve(
      CreateMannagerSeriesUseCase
    );

    await createMannagerSeriesUseCase.execute({
      name,
      numberEpisode,
      numberFinish,
    });

    return response.status(201).send();
  }
}

export { CreateMannagerSeriesController };
