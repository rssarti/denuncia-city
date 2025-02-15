"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUser1738718622434 = void 0;
const typeorm_1 = require("typeorm");
class CreateUser1738718622434 {
    async up(queryRunner) {
        /////// USERS TABLE ///////
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'users',
            columns: [
                new typeorm_1.TableColumn({ name: 'id', type: 'serial', isPrimary: true }),
                new typeorm_1.TableColumn({ name: 'name', type: 'varchar' }),
                new typeorm_1.TableColumn({ name: 'email', type: 'varchar', isUnique: true }),
                new typeorm_1.TableColumn({ name: 'phone', type: 'varchar' }),
                new typeorm_1.TableColumn({ name: 'birthday', type: 'date' }),
                new typeorm_1.TableColumn({ name: 'password', type: 'varchar' }),
                new typeorm_1.TableColumn({ name: 'hash', type: 'varchar' }),
                new typeorm_1.TableColumn({ name: 'political', type: 'boolean' }),
                new typeorm_1.TableColumn({ name: 'political_party', type: 'varchar' }),
                new typeorm_1.TableColumn({ name: 'admin', type: 'boolean' }),
                new typeorm_1.TableColumn({ name: 'created_at', type: 'timestamp', default: 'now()' }),
                new typeorm_1.TableColumn({ name: 'updated_at', type: 'timestamp', default: 'now()' }),
            ],
        }));
        /////// END USERS TABLE ///////
        /////// CATEGORIES TABLE ///////
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'categories',
            columns: [
                new typeorm_1.TableColumn({ name: 'id', type: 'serial', isPrimary: true }),
                new typeorm_1.TableColumn({ name: 'name', type: 'varchar' }),
                new typeorm_1.TableColumn({ name: 'icon', type: 'varchar' }),
            ],
        }));
        /////// END CATEGORIES TABLE ///////
        /////// COMPLAINTS TABLE //////
        await queryRunner.createTable(new typeorm_1.Table({
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
        }));
        // Criando a chave estrangeira entre complaints.category_id e categories.id
        await queryRunner.createForeignKey('complaints', new typeorm_1.TableForeignKey({
            columnNames: ['category_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'categories',
            onDelete: 'CASCADE',
        }));
        await queryRunner.createForeignKey('complaints', new typeorm_1.TableForeignKey({
            columnNames: ['user_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'users',
            onDelete: 'CASCADE',
        }));
        await queryRunner.createTable(new typeorm_1.Table({
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
        }));
        await queryRunner.createForeignKey('complaint_photos', new typeorm_1.TableForeignKey({
            columnNames: ['complaint_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'complaints',
            onDelete: 'CASCADE',
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('users');
        await queryRunner.dropTable('categories');
    }
}
exports.CreateUser1738718622434 = CreateUser1738718622434;
