import { Request, Response } from "express";
import { container } from "tsyringe";

import { Fitness } from "../../entities/Fitness";
import { CreateFitnessUseCase } from "./CreateFitnessUseCase";

class CreateFitnessControler {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      comentarios,
      dia,
      braco,
      antebraco,
      bracoDescancando,
      medidaUmbigo,
      medidaMaior,
    }: Fitness = request.body;

    const createFitnessUseCase = container.resolve(CreateFitnessUseCase);

    await createFitnessUseCase.execute({
      comentarios,
      dia,
      braco,
      antebraco,
      bracoDescancando,
      medidaUmbigo,
      medidaMaior,
    });

    return response.status(201).send();
  }
}

export { CreateFitnessControler };
