import { check, validationResult } from "express-validator";
import { verificarLlaveForanea } from "../helpers/utils.helpers.js";
import  { tipoMedicionModel } from "../models/tipoMedicionModel.js";

export const validarDatosIngresarUmbral  = [
    check('idTipoMedicion').notEmpty().withMessage('El campo idTipoMedicion es obligatorio.').isInt().withMessage('Formato incorrecto'),
    check('valor_maximo').notEmpty().withMessage('El campo valor_maximo es obligatorio.').isFloat({ precision: 1}).withMessage('Formato incorrecto valor_maximo, decimal con 1 dígito de precisión'),
    check('valor_minimo').notEmpty().withMessage('El campo valor_minimo es obligatorio.').isFloat({ precision: 1}).withMessage('Formato incorrecto valor_minimo, decimal con 1 dígito de precisión'),

    (req, res, next) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() });
        }
        verificarLlaveForanea(tipoMedicionModel, req.body.idTipoMedicion, res).then((resultado) => {
            if (resultado) {
                // Continuar con el siguiente middleware
                next();
            }
        })
    }
]

export const validarIdUmbral = [
    check('idUmbral').notEmpty().withMessage('El campo id es obligatorio.').isInt().withMessage('Formato incorrecto'),
    (req, res, next) =>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
]

export const validarIdUmbralYIdTipoMedicion = [
    check('idTipoMedicion').notEmpty().withMessage('El campo idTipoMedicion es obligatorio.').isInt().withMessage('Formato incorrecto'),
    (req, res, next) =>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
]