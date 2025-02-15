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
router.post('/', async (req, res) => {
    try {
        const userData = req.body;
        console.log('userData', userData);
        const user = await users_service_1.userService.createUser(userData);
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
