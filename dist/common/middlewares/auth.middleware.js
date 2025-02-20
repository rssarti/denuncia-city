"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const jwt_config_1 = require("../../config/jwt.config");
const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        res.status(401).json({ message: 'Token não fornecido' });
        return;
    }
    try {
        const decoded = jwt_config_1.JwtService.verifyToken(token);
        if (!decoded) {
            res.status(401).json({ message: 'Token inválido ou expirado' });
            return;
        }
        req.user = decoded;
        next();
    }
    catch (error) {
        res.status(401).json({ message: 'Erro ao validar token' });
    }
};
exports.authMiddleware = authMiddleware;
