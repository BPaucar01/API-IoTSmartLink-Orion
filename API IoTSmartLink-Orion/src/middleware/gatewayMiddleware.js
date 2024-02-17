import { check, validationResult } from "express-validator";


export const validarDatosIngresarGateway  = [
    check('modelo').notEmpty().withMessage('El campo modelo es obligatorio.').isString().withMessage('Formato incorrecto'),
    check('nombre').notEmpty().withMessage('El campo nombre es obligatorio.').isString().withMessage('Formato incorrecto'),
    check('direccionMAC').notEmpty().withMessage('El campo direccionMAC es obligatorio.').isString().withMessage('Formato incorrecto'),
    (req, res, next) =>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() });
        }
        next()
    }
]

export const validarIdGateway = [
    check('idGateway').notEmpty().withMessage('El campo id es obligatorio.').isInt().withMessage('Formato incorrecto'),
    (req, res, next) =>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
]