import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("fitness")
class Fitness {
  @PrimaryColumn()
  id?: string;

  @Column({ type: "date" })
  dia?: string;

  @Column()
  comentarios: string;

  @Column()
  braco?: number;

  @Column()
  antebraco?: number;

  @Column()
  bracoDescancando?: number;

  @Column()
  medidaUmbigo?: number;

  @Column()
  medidaMaior?: number;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Fitness };
