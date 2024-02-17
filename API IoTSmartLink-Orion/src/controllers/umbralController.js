import { umbralService } from "../services/umbralService.js";
import moment from "moment-timezone";
import { TIMEZONE } from "../config.js";

export const umbralController = {
    obtenerTodosUmbrales: async (req, res) => {
        try {
            const umbrales = await umbralService.obtenerTodosUmbrales(req.usuario.idSucursal);
            if(umbrales.length === 0){
                return res.status(404).json({ error: 'Ningún dato encontrado' });
            }
            res.json(umbrales);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    crearUmbral: async (req, res) => {
        try {
            const body ={
                idTipoMedicion: req.body.idTipoMedicion,
                idSucursal : req.usuario.idSucursal,
                valor_maximo: req.body.valor_maximo,
                valor_minimo: req.body.valor_minimo,
                fecha_creacion: moment().tz(TIMEZONE).format('YYYY-MM-DDTHH:mm:ss.SSS[Z]')
            }
            const umbral = await umbralService.crearUmbral(body);
            if(umbral){
                res.status(201).json({ message: 'Umbral creado correctamente', umbral });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    obtenerUmbralPorId: async (req, res) => {
        try {
            const umbral = await umbralService.obtenerUmbralPorId(req.params.idUmbral);
            if(umbral){
                res.json(umbral);
            }else{
                res.status(404).json({ error: 'Umbral no encontrado' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    obtenerUmbralPorIdMedicion: async (req, res) => {
        try {
            const umbral = await umbralService.obtenerUmbralPorIdMedicion(req.params.idTipoMedicion);
            if(umbral){
                res.json(umbral);
            }else{
                res.status(404).json({ error: 'Umbral no encontrado' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}