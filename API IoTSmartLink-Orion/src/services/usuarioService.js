import { usuarioModel } from "../models/usuarioModel.js";

export const usuarioService = {
    crearUsuario: async (usuario) => {
        try{
            return await usuarioModel.create(usuario);
            
        }catch(error){
            throw new Error(error);
        
        }
    },
    obtenerUsuario: async (username) => {
        try{
            return await usuarioModel.findOne({where: {username}});
        }catch(error){
            throw new Error(error);
        }
    }
}