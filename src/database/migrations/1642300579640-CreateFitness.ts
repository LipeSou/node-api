import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateFitness1642300579640 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "fitness",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "dia",
            type: "date",
          },
          {
            name: "comentarios",
            type: "varchar",
          },
          {
            name: "braco",
            type: "real",
          },
          {
            name: "antebraco",
            type: "real",
          },
          {
            name: "bracoDescancando",
            type: "real",
          },
          {
            name: "medidaUmbigo",
            type: "real",
          },
          {
            name: "medidaMaior",
            type: "real",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("categories");
  }
}
