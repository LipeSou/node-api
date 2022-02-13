import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListMannagerSeriesUseCase } from "./ListMannagerSeriesUseCase";

class ListMannagerSeriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listMannagerSeriesUseCase = container.resolve(
      ListMannagerSeriesUseCase
    );
    const all = await listMannagerSeriesUseCase.execute();
    response.header("Access-Control-Allow-Origin", "*");

    return response.json(all);
  }
}

export { ListMannagerSeriesController };
