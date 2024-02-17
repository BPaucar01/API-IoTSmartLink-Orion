import { medicionService } from "../services/medicionService.js";

export const medicionController = {
    obtenerTodasMediciones: async (req, res) => {
        try {
            console.log(req.usuario.idSucursal)
            const params = {
                idDispositivoIoT: req.body.idDispositivoIoT,
                fecha: req.body.fecha_creacion,
                idSucursal: req.usuario.idSucursal
            };
            const mediciones = await medicionService.obtenerTodasMediciones(params);
            if (mediciones.length === 0) {
                // Si no se encontraron mediciones, responder con un mensaje de error
                return res.status(404).json({ error: 'Ningún dato encontrado' });
            }
            res.json(mediciones);
        } catch (error) {

            res.status(500).json({ error: error.message });
        }
    },

    crearMedicion: async (req, res) => {
        try {
            console.log(req.body)
            const medicion = await medicionService.crearMedicion(req.body, req.usuario.idSucursal);
            if(medicion){
                res.status(201).json({ message: 'Medición creada correctamente', medicion });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}