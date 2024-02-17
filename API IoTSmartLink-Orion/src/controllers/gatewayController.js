import { gatewayService } from "../services/gatewayService.js"; 
import moment from "moment-timezone";
import { TIMEZONE } from "../config.js";

export const gatewayController = {
    obtenerTodosGateways: async (req, res) => {
        try {
            const gateways = await gatewayService.obtenerTodosGateways(req.usuario.idSucursal);
            if(gateways.length === 0){
                return res.status(404).json({ error: 'Ningún dato encontrado' });
            }
            res.json(gateways);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    crearGateway: async (req, res) => {
        try {
            const body ={
                idSucursal : req.usuario.idSucursal,
                modelo: req.body.modelo,
                nombre: req.body.nombre,
                direccionMAC: req.body.direccionMAC,
                fecha_creacion: moment().tz(TIMEZONE).format('YYYY-MM-DDTHH:mm:ss.SSS[Z]')
            }
            const gateway = await gatewayService.crearGateway(body);
            if(gateway){
                res.status(201).json({ message: 'Gateway creado correctamente', gateway });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    obtenerGatewayPorId: async (req, res) => {
        try {
            const gateway = await gatewayService.obtenerGatewayPorId(req.params.idGateway);
            if(gateway){
                res.json(gateway);
            }else{
                res.status(404).json({ error: 'Gateway no encontrado' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}