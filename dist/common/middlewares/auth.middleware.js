"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const jwt_config_1 = require("../../config/jwt.config");
const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Token não fornecido' });
    }
    const decoded = jwt_config_1.JwtService.verifyToken(token);
    if (!decoded) {
        return res.status(401).json({ message: 'Token inválido ou expirado' });
    }
    req.user = decoded;
    next();
};
exports.authMiddleware = authMiddleware;
