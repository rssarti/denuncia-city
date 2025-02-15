import { MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey } from 'typeorm';

export class CreateUser1738718622434 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    /////// USERS TABLE ///////

    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          new TableColumn({ name: 'id', type: 'serial', isPrimary: true }),
          new TableColumn({ name: 'name', type: 'varchar' }),
          new TableColumn({ name: 'email', type: 'varchar', isUnique: true }),
          new TableColumn({ name: 'phone', type: 'varchar' }),
          new TableColumn({ name: 'birthday', type: 'date' }),
          new TableColumn({ name: 'password', type: 'varchar' }),
          new TableColumn({ name: 'hash', type: 'varchar' }),
          new TableColumn({ name: 'political', type: 'boolean' }),
          new TableColumn({ name: 'political_party', type: 'varchar' }),
          new TableColumn({ name: 'admin', type: 'boolean' }),
          new TableColumn({ name: 'created_at', type: 'timestamp', default: 'now()' }),
          new TableColumn({ name: 'updated_at', type: 'timestamp', default: 'now()' }),
        ],
      }),
    );

    /////// END USERS TABLE ///////

    /////// CATEGORIES TABLE ///////

    await queryRunner.createTable(
      new Table({
        name: 'categories',
        columns: [
          new TableColumn({ name: 'id', type: 'serial', isPrimary: true }),
          new TableColumn({ name: 'name', type: 'varchar' }),
          new TableColumn({ name: 'icon', type: 'varchar' }),
        ],
      }),
    );

    /////// END CATEGORIES TABLE ///////

    /////// COMPLAINTS TABLE //////

    await queryRunner.createTable(
      new Table({
        name: 'complaints',
        columns: [
          {
            name: 'id',
            type: 'serial',
            isPrimary: true,
          },
          {
            name: 'category_id',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'user_id',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'description',
            type: 'text',
            isNullable: false,
          },
          {
            name: 'status',
            type: 'integer',
            isNullable: false,
            default: 0,
          },
          {
            name: 'priority',
            type: 'integer',
            isNullable: false,
            default: 1,
          },
          {
            name: 'latitude',
            type: 'decimal',
            precision: 10,
            scale: 6,
            isNullable: true,
          },
          {
            name: 'longitude',
            type: 'decimal',
            precision: 10,
            scale: 6,
            isNullable: true,
          },
          {
            name: 'image_url',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );

    // Criando a chave estrangeira entre complaints.category_id e categories.id
    await queryRunner.createForeignKey(
      'complaints',
      new TableForeignKey({
        columnNames: ['category_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'categories',
        onDelete: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'complaints',
      new TableForeignKey({
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'CASCADE',
      }),
    );

    await queryRunner.createTable(
      new Table({
        name: 'complaint_photos',
        columns: [
          {
            name: 'file',
            type: 'varchar',
          },
          {
            name: 'caption',
            type: 'varchar',
          },
          {
            name: 'complaint_id',
            type: 'int',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'complaint_photos',
      new TableForeignKey({
        columnNames: ['complaint_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'complaints',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
    await queryRunner.dropTable('categories');
  }
}
