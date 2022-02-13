import { getRepository, Repository } from "typeorm";

import { Fitness } from "../../entities/Fitness";
import { ICreateFitnessDTO, IFitnessRepository } from "../IFitnessRepository";

class FitnessRepository implements IFitnessRepository {
  private repository: Repository<Fitness>;

  constructor() {
    this.repository = getRepository(Fitness);
  }

  async create({
    dia,
    comentarios,
    braco,
    antebraco,
    bracoDescancando,
    medidaUmbigo,
    medidaMaior,
  }: ICreateFitnessDTO): Promise<void> {
    const fitness = this.repository.create({
      dia,
      comentarios,
      braco,
      antebraco,
      bracoDescancando,
      medidaUmbigo,
      medidaMaior,
    });

    await this.repository.save(fitness);
  }

  async list(): Promise<Fitness[]> {
    const fitness = await this.repository.find();
    return fitness;
  }

  async findByDate(dia: string): Promise<Fitness> {
    // Select * from fitness where dia = "dia" limit 1
    const fitness = await this.repository.findOne({ dia });
    return fitness;
  }
}

export { FitnessRepository };
