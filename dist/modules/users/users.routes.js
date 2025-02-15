"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = require("express");
const users_service_1 = require("./users.service");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    const users = users_service_1.userService.listUsers();
    res.json(users);
});
router.post('/', (req, res) => {
    res.json({ message: 'Usuário criado com sucesso' });
});
exports.userRoutes = router;
