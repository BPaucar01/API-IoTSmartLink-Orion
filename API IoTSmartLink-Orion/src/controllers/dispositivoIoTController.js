import { dispositivoIoTService } from "../services/dispositivoIoTService.js";

export const dispositivoIoTController = {
    obtenerTodosDispositivosIoT: async (req, res) => {
        try {
            const dispositivosIoT = await dispositivoIoTService.obtenerTodosDispositivosIoT(req.usuario.idSucursal);
            res.json(dispositivosIoT);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    
    obtenerDispositivoIoTPorId: async (req, res) => {
        try {
            const dispositivoIoT = await dispositivoIoTService.obtenerDispositivoIoTPorId(req.params.idDispositivoIoT);
            res.json(dispositivoIoT);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    obtenerDispositivoIoTPorDevEUI: async (req, res) => {
        try {
            const dispositivoIoT = await dispositivoIoTService.obtenerDispositivoIoTPorDevEUI(req.params.devEUI);
            res.json(dispositivoIoT);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}