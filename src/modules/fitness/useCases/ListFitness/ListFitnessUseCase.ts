import { inject, injectable } from "tsyringe";

import { Fitness } from "../../entities/Fitness";
import { IFitnessRepository } from "../../repositories/IFitnessRepository";

@injectable()
class ListFitnessUseCase {
  constructor(
    @inject("FitnessRepository")
    private fitnessRepository: IFitnessRepository
  ) {}

  async execute(): Promise<Fitness[]> {
    const fitness = await this.fitnessRepository.list();

    return fitness;
  }
}

export { ListFitnessUseCase };
