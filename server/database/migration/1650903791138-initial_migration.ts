import { MigrationInterface, QueryRunner } from 'typeorm'

export class initialMigration1650903791138 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`create table kanji
    (
        id          char(36) collate utf8mb4_bin not null
            primary key,
        \`character\` char(255)                    not null,
        constraint \`character\`
            unique (\`character\`)
    );
    `)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`drop table kanji`)
  }
}
