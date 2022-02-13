import { MannagerSeries } from "../entities/MannageSeries";

interface ICreateMannagerSeriesDTO {
  name: string;
  numberEpisode: number;
  numberFinish: number;
}

interface IMannagerSeriesRepository {
  list(): Promise<MannagerSeries[]>;
  create({
    name,
    numberEpisode,
    numberFinish,
  }: ICreateMannagerSeriesDTO): Promise<void>;
}

export { IMannagerSeriesRepository, ICreateMannagerSeriesDTO };
