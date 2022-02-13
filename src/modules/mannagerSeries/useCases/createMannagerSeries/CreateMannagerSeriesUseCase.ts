import { inject, injectable } from "tsyringe";

import {
  ICreateMannagerSeriesDTO,
  IMannagerSeriesRepository,
} from "../../repositories/IMannagerSeriesRepository";

@injectable()
class CreateMannagerSeriesUseCase {
  constructor(
    @inject("MannagerSeriesRepository")
    private mannagerSeriesRepository: IMannagerSeriesRepository
  ) {}

  async execute({
    name,
    numberEpisode,
    numberFinish,
  }: ICreateMannagerSeriesDTO): Promise<void> {
    this.mannagerSeriesRepository.create({
      name,
      numberEpisode,
      numberFinish,
    });
  }
}

export { CreateMannagerSeriesUseCase };
