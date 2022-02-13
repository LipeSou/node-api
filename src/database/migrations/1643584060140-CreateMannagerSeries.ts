import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateMannagerSeries1643584060140 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "mannagerSeries",
        columns: [
          {
            name: "id",
            type: "uuid",
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "numberEpisode",
            type: "integer",
          },
          {
            name: "numberFinish",
            type: "integer",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("mannagerSeries");
  }
}
