import { umbralModel} from '../models/umbralModel.js';
import { tipoMedicionModel } from '../models/tipoMedicionModel.js';

export const umbralService = {
    obtenerTodosUmbrales: async (idSucursal) => {
        try{
            return await umbralModel.findAll({
                where: {
                    idSucursal: idSucursal
                },
                include: {
                    model: tipoMedicionModel,
                    required: true
                }
            });
        }catch(error){
            throw new Error("Error al obtener los datos de la base de datos");
        }
    },
    crearUmbral: async (umbral) => {
        try{
            return await umbralModel.create(umbral);
        }catch(error){
            throw new Error("Error al crear el umbral");
        }
    },
    obtenerUmbralPorId: async (idUmbral) => {
        
        try{
            console.log(idUmbral);
            return await umbralModel.findByPk(idUmbral,
                {
                    include: {
                        model: tipoMedicionModel,
                        required: true
                    }
                
                });
        }catch(error){
            console.log(error);
            throw new Error("Error al obtener los datos de la base de datos");
        }
    },
    obtenerUmbralPorIdMedicion: async (idTipoMedicion) => {
        try{
            return await umbralModel.findOne({
                where: {
                    idTipoMedicion: idTipoMedicion
                }
            });
        }catch(error){
            throw new Error("Error al obtener los datos de la base de datos");
        }
    }
}