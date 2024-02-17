import { tipoContenedorModel } from "../models/tipoContenedorModel.js";

export const tipoContenedorService = {
    obtenerTodosTiposContenedor: async () => {
        try{
            return await tipoContenedorModel.findAll();
        }catch(error){
            throw new Error("Error al obtener los datos de la base de datos");
        }
    },
    crearTipoContenedor: async (tipoContenedor) => {
        try{
            
            return await tipoContenedorModel.create(tipoContenedor);
        }catch(error){
            throw new Error("Error al crear el tipo de contenedor");
        }
    },
    obtenerTipoContenedorPorId: async (idTipoContenedor) => {
        try{
            return await tipoContenedorModel.findByPk(idTipoContenedor);
        }catch(error){
            throw new Error("Error al obtener los datos de la base de datos");
        }
    },
    actualizarTipoContenedor: async (idTipoContenedor, tipoContenedor) => {
        try{
            return await tipoContenedorModel.update(tipoContenedor, {
                where: {
                    idTipoContenedor: idTipoContenedor
                }
            });
        }catch(error){
            throw new Error("Error al actualizar el tipo de contenedor");
        }
    }
}