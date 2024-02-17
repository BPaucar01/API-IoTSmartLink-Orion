import jwt from 'jsonwebtoken';
import { usuarioModel } from '../models/usuarioModel.js';
import { JWT_SECRET } from "../config.js";
import { check, validationResult } from "express-validator";
import { verificarLlaveForanea } from '../helpers/utils.helpers.js';
export const authMiddleware = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, JWT_SECRET);
        const usuario = await usuarioModel.findByPk(decoded.id);

        if (!usuario) {
            throw new Error('Usuario no encontrado');

        }
        
        req.usuario = usuario;
        next();
    } catch (error) {
        res.status(401).json({ error: 'Token inválido o no proporcionado' });
    }
}

export const validarDatosCrearUsuario = [
    check('username').notEmpty().withMessage('El campo username es obligatorio.').isString().withMessage('Formato incorrecto'),
    check('password').notEmpty().withMessage('El campo password es obligatorio.').isString().withMessage('Formato incorrecto'),
    check('idSucursal').notEmpty().withMessage('El campo idSucursal es obligatorio.').isInt().withMessage('Formato incorrecto'),

    (req, res, next) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() });
        }
        next()
    },
]

export const validarDatosLoginUsuario = [
    check('username').notEmpty().withMessage('El campo username es obligatorio.').isString().withMessage('Formato incorrecto'),
    check('password').notEmpty().withMessage('El campo password es obligatorio.').isString().withMessage('Formato incorrecto'),

    (req, res, next) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
]