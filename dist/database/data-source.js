"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeDatabase = exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const dotenv_1 = require("dotenv");
const user_entities_1 = require("../common/entities/user.entities");
(0, dotenv_1.config)(); // Inicializa as variáveis de ambiente
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT ?? '5432'),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: false,
    logging: true,
    entities: [user_entities_1.User], // Sem a barra inicial "/"
    migrations: ['dist/database/migrations/*.js'], // Caminho correto
    migrationsTableName: 'migrations',
    subscribers: [],
});
const initializeDatabase = async () => {
    try {
        if (!exports.AppDataSource.isInitialized) {
            await exports.AppDataSource.initialize();
            console.log('📦 Banco de dados conectado com sucesso!');
        }
    }
    catch (error) {
        console.error('❌ Erro ao conectar ao banco de dados:', error);
        process.exit(1);
    }
};
exports.initializeDatabase = initializeDatabase;
