import { tipoMedicionModel } from "../models/tipoMedicionModel.js";

export const tipoMedicionService = {
    obtenerTodosTiposMedicion: async () => {
        try{
            return await tipoMedicionModel.findAll();
        }catch(error){
            throw new Error("Error al obtener los datos de la base de datos");
        }
    },
    crearTipoMedicion: async (tipoMedicion) => {
        try{
            
            return await tipoMedicionModel.create(tipoMedicion);
        }catch(error){
            throw new Error("Error al crear el tipo de medicion");
        }
    },
    obtenerTipoMedicionPorId: async (idTipoMedicion) => {
        try{
            return await tipoMedicionModel.findByPk(idTipoMedicion);
        }catch(error){
            throw new Error("Error al obtener los datos de la base de datos");
        }
    },
    actualizarTipoMedicion: async (idTipoMedicion, tipoMedicion) => {
        try{
            return await tipoMedicionModel.update(tipoMedicion, {
                where: {
                    idTipoMedicion: idTipoMedicion
                }
            });
        }catch(error){
            throw new Error("Error al actualizar el tipo de medicion");
        }
    },
    obtenerTipoMedicionPorNombre: async (nombre) => {
        try{
            return await tipoMedicionModel.findOne({
                where: {
                    nombre: nombre
                }
            });
        }catch(error){
            throw new Error("Error al obtener los datos de la base de datos");
        }
    }
}