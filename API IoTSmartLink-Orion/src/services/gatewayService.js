import { gatewayModel } from "../models/gatewayModel.js";

export const gatewayService = {
    obtenerTodosGateways: async (idSucursal) => {
        try{
            return await gatewayModel.findAll({
                where: {
                    idSucursal: idSucursal
                }
            });
        }catch(error){
            throw new Error("Error al obtener los datos de la base de datos");
        }
    },
    crearGateway: async (gateway) => {
        try{
            return await gatewayModel.create(gateway);
        }catch(error){
            throw new Error("Error al crear el gateway");
        }
    },
    obtenerGatewayPorId: async (idGateway) => {
        try{
            return await gatewayModel.findByPk(idGateway);
        }catch(error){
            throw new Error("Error al obtener los datos de la base de datos");
        }
    }
}