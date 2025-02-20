"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = require("express");
const users_service_1 = require("./users.service");
const auth_middleware_1 = require("../../common/middlewares/auth.middleware");
const router = (0, express_1.Router)();
router.get('/', auth_middleware_1.authMiddleware, async (req, res) => {
    const users = await users_service_1.userService.listUsers();
    res.json(users);
});
router.get('/me', auth_middleware_1.authMiddleware, (req, res) => {
    if (!req.user) {
        res.status(401).json({ message: 'Usuário não autenticado' });
    }
    res.json({ user: req.user });
});
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const token = await users_service_1.userService.authenticateUser(email, password);
        res.json(token);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
        else {
            res.status(400).json({ message: 'An unknown error occurred' });
        }
    }
});
router.post('/', async (req, res) => {
    try {
        const user = await users_service_1.userService.createUser(req.body);
        res.json(user);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
        else {
            res.status(400).json({ message: 'An unknown error occurred' });
        }
    }
});
exports.userRoutes = router;
