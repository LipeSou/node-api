import { getRepository, Repository } from "typeorm";

import { MannagerSeries } from "../../entities/MannageSeries";
import {
  ICreateMannagerSeriesDTO,
  IMannagerSeriesRepository,
} from "../IMannagerSeriesRepository";

class MannagerSeriesRepository implements IMannagerSeriesRepository {
  private repository: Repository<MannagerSeries>;

  constructor() {
    this.repository = getRepository(MannagerSeries);
  }

  async create({
    name,
    numberEpisode,
    numberFinish,
  }: ICreateMannagerSeriesDTO): Promise<void> {
    const mannagerSeries = this.repository.create({
      name,
      numberEpisode,
      numberFinish,
    });

    await this.repository.save(mannagerSeries);
  }

  async list(): Promise<MannagerSeries[]> {
    const mannagerSeries = await this.repository.find();
    return mannagerSeries;
  }
}

export { MannagerSeriesRepository };
