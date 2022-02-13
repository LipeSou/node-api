import { Fitness } from "../entities/Fitness";

interface ICreateFitnessDTO {
  dia?: string;
  comentarios: string;
  braco?: number;
  antebraco?: number;
  bracoDescancando?: number;
  medidaUmbigo?: number;
  medidaMaior?: number;
}

interface IFitnessRepository {
  findByDate(dia: string): Promise<Fitness>;
  list(): Promise<Fitness[]>;
  create({
    dia,
    comentarios,
    braco,
    antebraco,
    bracoDescancando,
    medidaUmbigo,
    medidaMaior,
  }: ICreateFitnessDTO): Promise<void>;
}

export { IFitnessRepository, ICreateFitnessDTO };
