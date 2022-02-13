import { inject, injectable } from "tsyringe";

import { MannagerSeries } from "../../entities/MannageSeries";
import { IMannagerSeriesRepository } from "../../repositories/IMannagerSeriesRepository";

@injectable()
class ListMannagerSeriesUseCase {
  constructor(
    @inject("MannagerSeriesRepository")
    private mannagerSeriesRepository: IMannagerSeriesRepository
  ) {}

  async execute(): Promise<MannagerSeries[]> {
    const mannagerSeries = await this.mannagerSeriesRepository.list();

    return mannagerSeries;
  }
}

export { ListMannagerSeriesUseCase };
