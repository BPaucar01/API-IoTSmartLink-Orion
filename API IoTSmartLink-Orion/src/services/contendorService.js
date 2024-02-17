import { contenedorModel } from "../models/contenedorModel.js";
import { tipoContenedorModel } from "../models/tipoContenedorModel.js";
import { umbralModel } from "../models/umbralModel.js";
import { tipoMedicionModel } from "../models/tipoMedicionModel.js";

export const contenedorService = {
    obtenerTodosContenedores: async (idSucursal) => {
        try {
            const contenedores = await contenedorModel.findAll({
                where: {
                    idSucursal
                },
                include: [
                    {
                        model: tipoContenedorModel,
                        required: true
                    },
                    {
                        model: umbralModel,
                        required: true,
                        include: {
                            model: tipoMedicionModel,
                            required: true
                        }
                    },
                ]
            });
            return contenedores;
        } catch (error) {
            throw new Error(error);
        }
    },
    crearContenedor: async (contenedor) => {
        try {
            return await contenedorModel.create(contenedor);
        } catch (error) {
            throw new Error(error);
        }
    },

    obtenerContendorPorId: async (idContenedor) => {
        try{
            return await contenedorModel.findByPk(idContenedor, 
                {
                    include: [
                        {
                            model: tipoContenedorModel,
                            required: true
                        },
                        {
                            model: umbralModel,
                            required: true,
                            include: {
                                model: tipoMedicionModel,
                                required: true
                            }
                        },
                    ]
                });
        }catch{
            throw new Error(error);
        }
    }
}