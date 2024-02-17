import { tipoContenedorService } from "../services/tipoContenedorService.js"; 
import moment from "moment-timezone";
import { TIMEZONE } from "../config.js";

export const tipoContenedorController = {
    obtenerTodosTiposContenedor: async (req, res) => {
        try{
            const tiposContenedor = await tipoContenedorService.obtenerTodosTiposContenedor();
            if(tiposContenedor.length === 0){
                return res.status(404).json({ error: 'Ningún dato encontrado' });
            }
            res.json(tiposContenedor);
        }catch(error){
            res.status(500).json({ error: error.message })
        }
    },

    crearTipoContenedor: async (req, res) => {
        try{
            const body ={
                tipo: req.body.tipo,
                fecha_creacion: moment().tz(TIMEZONE).format('YYYY-MM-DDTHH:mm:ss.SSS[Z]')
            }
            const tipoContenedor = await tipoContenedorService.crearTipoContenedor(body);
            res.status(201).json(tipoContenedor);
        }catch(error){
            res.status(500).json({ error: error.message });
        }
    },

    obtenerTipoContenedorPorId: async (req, res) => {
        try {
            
            const tipoContenedor = await tipoContenedorService.obtenerTipoContenedorPorId(req.params.idTipoContenedor);
            if(tipoContenedor){
                res.json(tipoContenedor);
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    actualizarTipoContenedor: async (req, res) => {
        try{
            const body ={
                tipo: req.body.tipo,
            }
            const tipoContenedor = await tipoContenedorService.actualizarTipoContenedor(req.params.idTipoContenedor, body);
            if(tipoContenedor[0]){
                res.json({ message: 'Tipo de contenedor actualizado correctamente', tipoContenedor});
            }else{
                res.status(404).json({ error: 'Tipo de contenedor no encontrado' });
            }
        }catch(error){
            res.status(500).json({ error: error.message });
        }
    }
}