import { check, validationResult } from "express-validator";

export const validarDatosIngresarTipoMedicion  = [
    check('nombre').notEmpty().withMessage('El campo nombre es obligatorio.').isString().withMessage('Formato incorrecto'),
    check('unidad').notEmpty().withMessage('El campo unidad es obligatorio.').isString().withMessage('Formato incorrecto'),
    (req, res, next) =>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() });
        }
        next()
    }
]

export const validarIdTipoMedicion = [
    check('idTipoMedicion').notEmpty().withMessage('El campo id es obligatorio.').isInt().withMessage('Formato incorrecto'),
    (req, res, next) =>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
]

export const validarNombreTipoMedicion  = [
    check('nombre').notEmpty().withMessage('El campo nombre es obligatorio.').isString().withMessage('Formato incorrecto'),
    (req, res, next) =>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() });
        }
        next()
    }
]