"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.database = void 0;
const data_source_1 = require("../database/data-source");
exports.database = data_source_1.AppDataSource.initialize()
    .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso');
})
    .catch((error) => {
    console.error('Erro ao conectar com o banco de dados:', error);
});
