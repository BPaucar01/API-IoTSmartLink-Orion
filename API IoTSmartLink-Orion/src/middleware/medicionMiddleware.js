import { check, validationResult } from "express-validator";
import { verificarLlaveForanea } from "../helpers/utils.helpers.js";
import { dispositivoIoTModel } from "../models/dispositivoIoTModel.js";
import { tipoMedicionModel } from "../models/tipoMedicionModel.js";

export const validarDatosObtenerMediciones  = [
    check('idDispositivoIoT').optional().isInt().withMessage('Formato incorrecto'),
    check('fecha_creacion').optional().isISO8601().withMessage('Formato incorrecto'),
    (req, res, next) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
]

export const validarDatosIngresarMedicion = [
    
    check('idTipoMedicion').notEmpty().withMessage('El campo idTipoMedicion es obligatorio.'). isInt().withMessage('Formato incorrecto'),
    check('idDispositivoIoT').notEmpty().withMessage('El campo idDispositivoIoT es obligatorio.').isInt().withMessage('Formato incorrecto'),
    check('valorMedicion').notEmpty().withMessage('El campo valorMedicion es obligatorio.').isFloat({ precision: 1}).withMessage('Formato incorrecto, decimal con 1 dígito de precisión'),
    check('estado').notEmpty().withMessage('El campo estado es obligatorio.').isString().withMessage('Formato incorrecto'),
    check('fecha_creacion').notEmpty().withMessage('El campo fecha_creacion es obligatorio.').isISO8601().withMessage('Formato incorrecto'),
    (req, res, next) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() });
        }
        verificarLlaveForanea(tipoMedicionModel, req.body.idTipoMedicion, res).then((resultado) => {
            if (resultado) {
                verificarLlaveForanea(dispositivoIoTModel, req.body.idDispositivoIoT, res).then((resultado) => {
                    if (resultado) {
                        // Continuar con el siguiente middleware
                        next();
                    }
                })
            }
        })
    }
]