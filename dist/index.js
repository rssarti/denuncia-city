"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_routes_1 = require("./modules/users/users.routes");
const data_source_1 = require("./database/data-source");
const complaints_route_1 = require("./modules/complaints/complaints.route");
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
data_source_1.AppDataSource.initialize()
    .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso');
    app.use('/users', users_routes_1.userRoutes);
    app.use('/complaints', complaints_route_1.complaintsRoutes);
    app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}`);
    });
})
    .catch((error) => {
    console.error('Erro ao conectar ao banco:', error);
});
app.use('/users', users_routes_1.userRoutes);
