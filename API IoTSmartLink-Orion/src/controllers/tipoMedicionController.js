import { tipoMedicionService } from "../services/tipoMedicionService.js";
import moment from "moment-timezone";
import { TIMEZONE } from "../config.js";

export const tipoMedicionController = {
    obtenerTodosTiposMedicion: async (req, res) => {
        try{
            const tiposMedicion = await tipoMedicionService.obtenerTodosTiposMedicion();
            if(tiposMedicion.length === 0){
                return res.status(404).json({ error: 'Ningún dato encontrado' });
            }
            res.json(tiposMedicion);
        }catch(error){
            res.status(500).json({ error: error.message })
        }
    },

    crearTipoMedicion: async (req, res) => {
        try{
            const body ={
                nombre: req.body.nombre,
                unidad: req.body.unidad,
                fecha_creacion: moment().tz(TIMEZONE).format('YYYY-MM-DDTHH:mm:ss.SSS[Z]')
            }
            const tipoMedicion = await tipoMedicionService.crearTipoMedicion(body);
            res.status(201).json(tipoMedicion);
        }catch(error){
            res.status(500).json({ error: error.message });
        }
    },

    obtenerTipoMedicionPorId: async (req, res) => {
        try {
            
            const tipoMedicion = await tipoMedicionService.obtenerTipoMedicionPorId(req.params.idTipoMedicion);
            if(tipoMedicion){
                res.json(tipoMedicion);
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    actualizarTipoMedicion: async (req, res) => {
        try{
            const body ={
                nombre: req.body.nombre,
                unidad: req.body.unidad,
            }
            const tipoMedicion = await tipoMedicionService.actualizarTipoMedicion(req.params.idTipoMedicion, body);
            if(tipoMedicion[0]){
                res.json({ message: 'Tipo de medicion actualizado correctamente', tipoMedicion});
            }else{
                res.status(404).json({ error: 'Tipo de medicion no encontrado' });
            }
            await tipoMedicionService.actualizarTipoMedicion(req.params.idTipoMedicion, body);
        }catch(error){
            res.status(500).json({ error: error.message });
        }
    },
    obtenerTipoMedicionPorNombre: async (req, res) => {
        try {
            const tipoMedicion = await tipoMedicionService.obtenerTipoMedicionPorNombre(req.params.nombre);
            if(tipoMedicion){
                res.json(tipoMedicion);
            }else{
                res.status(404).json({ error: 'Tipo de medicion no encontrado' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}