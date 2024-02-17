import { contenedorService } from "../services/contendorService.js";
import moment from "moment-timezone";
import { TIMEZONE } from "../config.js";

export const contenedorController = {
    obtenerTodosContenedores: async (req, res) => {
        try {
            const contenedores = await contenedorService.obtenerTodosContenedores(req.usuario.idSucursal);
            if(contenedores.length === 0){
                return res.status(404).json({ message: 'Ningún dato encontrado' });
            }
            res.json(contenedores);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    crearContenedor: async (req, res) => {
        try {
            const body = {
                idSucursal: req.usuario.idSucursal,
                idTipoContenedor: req.body.idTipoContenedor,
                idUmbral: req.body.idUmbral,
                codigo: req.body.codigo,
                fecha_creacion: moment().tz(TIMEZONE).format('YYYY-MM-DDTHH:mm:ss.SSS[Z]')
            }
            const contenedor = await contenedorService.crearContenedor(body);
            if(contenedor){
                res.status(201).json({ message: 'Contenedor creado correctamente', contenedor });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    obtenerContenedorPorId: async (req, res) => {
        try {
            const contenedor = await contenedorService.obtenerContendorPorId(req.params.idContenedor);
            if(contenedor){
                res.json(contenedor);
            }else{
                res.status(404).json({ message: 'Contenedor no encontrado' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}