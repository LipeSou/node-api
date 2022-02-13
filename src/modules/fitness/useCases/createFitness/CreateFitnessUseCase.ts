import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import {
  ICreateFitnessDTO,
  IFitnessRepository,
} from "../../repositories/IFitnessRepository";

@injectable()
class CreateFitnessUseCase {
  constructor(
    @inject("FitnessRepository")
    private fitnessRepository: IFitnessRepository
  ) {}

  async execute({
    comentarios,
    dia,
    braco,
    antebraco,
    bracoDescancando,
    medidaMaior,
    medidaUmbigo,
  }: ICreateFitnessDTO): Promise<void> {
    if (dia) {
      const fitnessAlreadyExists = await this.fitnessRepository.findByDate(dia);

      if (fitnessAlreadyExists) {
        throw new AppError("O dia informado já existe");
      }
    }

    this.fitnessRepository.create({
      comentarios,
      dia,
      braco,
      antebraco,
      bracoDescancando,
      medidaMaior,
      medidaUmbigo,
    });
  }
}

export { CreateFitnessUseCase };
