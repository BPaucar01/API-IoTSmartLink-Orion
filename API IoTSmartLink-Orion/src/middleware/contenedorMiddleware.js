import { check, validationResult } from "express-validator";
import { verificarLlaveForanea } from "../helpers/utils.helpers.js";
import { tipoContenedorModel } from "../models/tipoContenedorModel.js";
import { umbralModel } from "../models/umbralModel.js";

export const validarDatosIngresarContenedor = [
    check('idTipoContenedor').notEmpty().withMessage('El campo idTipoContenedor es obligatorio.').isInt().withMessage('Formato incorrecto'),
    check('idUmbral').notEmpty().withMessage('El campo idUmbral es obligatorio.').isInt().withMessage('Formato incorrecto'),
    check('codigo').notEmpty().withMessage('El campo codigo es obligatorio.').isString().withMessage('Formato incorrecto'),
    (req, res, next) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() });
        }
        verificarLlaveForanea(tipoContenedorModel, req.body.idTipoContenedor, res).then((resultado) => {
            if (resultado) {
                verificarLlaveForanea(umbralModel, req.body.idUmbral, res).then((resultado) => {
                    if (resultado) {
                        // Continuar con el siguiente middleware
                        next();
                    }
                })
            }
        })
    }
]

export const validarIdContenedor = [
    check('idContenedor').notEmpty().withMessage('El campo id es obligatorio.').isInt().withMessage('Formato incorrecto'),
    (req, res, next) =>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
]