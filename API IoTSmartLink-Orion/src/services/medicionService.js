import { medicionModel } from "../models/medicionModel.js";
import { dispositivoIoTModel } from "../models/dispositivoIoTModel.js";
import { Sequelize } from "sequelize";
import { tipoMedicionModel } from "../models/tipoMedicionModel.js";


export const medicionService = {
    obtenerTodasMediciones: async ({ idDispositivoIoT, fecha, idSucursal }) => {
        try {
            let whereClause = {};

            // Agregar condiciones según los parámetros proporcionados
            if (idDispositivoIoT) {
                whereClause.idDispositivoIoT = idDispositivoIoT;
            }
            if (fecha) {
                whereClause.fecha_creacion = {
                    [Sequelize.Op.between]: [`${fecha} 00:00:00`, `${fecha} 23:59:59`]
                };
            }
            // Construir la consulta
            const consulta = {
                where: whereClause,
                include: [
                    {
                        model: dispositivoIoTModel,
                        where: { idSucursal },
                    },
                    {
                        model: tipoMedicionModel,
                        required: true
                    }
                ]
            };

            return await medicionModel.findAll(consulta);
        } catch (error) {
            console.log(error);
            throw new Error("Error al obtener los datos de la base de datos");
        }
    },

    crearMedicion: async (medicion, idSucursal) => {
        try {
            const dispositivoIoT = await dispositivoIoTModel.findByPk(medicion.idDispositivoIoT);
            if (dispositivoIoT && dispositivoIoT.idSucursal === idSucursal) {
                // El dispositivoIoT está asociado a la sucursal proporcionada, por lo que puedes crear la medición
                return await medicionModel.create(medicion);
            } else {
                throw new Error("El dispositivo IoT no está asociado a la sucursal proporcionada.");
            }

        } catch (error) {
            //console.log(error);
            throw new Error("Error al crear la medición");
        }
    }
}