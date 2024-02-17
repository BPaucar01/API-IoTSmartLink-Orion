import { check, validationResult } from "express-validator";

export const validarDatosIngresarTipoContenedor  = [
    check('tipo').notEmpty().withMessage('El campo tipo es obligatorio.').isString().withMessage('Formato incorrecto'),
    (req, res, next) =>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() });
        }
        next()
    }
]

export const validarIdTipoContenedor = [
    check('idTipoContenedor').notEmpty().withMessage('El campo id es obligatorio.').isInt().withMessage('Formato incorrecto'),
    (req, res, next) =>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
]