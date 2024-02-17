import { dispositivoIoTModel } from "../models/dispositivoIoTModel.js";

export const dispositivoIoTService = {
    obtenerTodosDispositivosIoT: async (idSucursal) => {
        try {
            const dispositivosIoT = await dispositivoIoTModel.findAll({
                where: {
                    idSucursal
                }
            });
            return dispositivosIoT;
        } catch (error) {
            throw new Error(error);
        }
    },
    
    obtenerDispositivoIoTPorId: async (idDispositivoIoT) => {
        try{
            return await dispositivoIoTModel.findByPk(idDispositivoIoT);
        }catch{
            throw new Error(error);
        }
    },

    obtenerDispositivoIoTPorDevEUI: async (devEUI) => {
        try{
            return await dispositivoIoTModel.findOne({
                where: {
                    devEUI
                }
            });
        }catch{
            throw new Error(error);
        }
    }
}