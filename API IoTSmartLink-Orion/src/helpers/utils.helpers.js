
import { JWT_SECRET } from "../config.js";
import bcrypt from 'bcryptjs';
import jsonwebtoken from "jsonwebtoken";

export const verificarLlaveForanea = async (model, id, res) => {
    try {
        const registro = await model.findByPk(id);
        if (!registro) {
            res.status(400).json({ errors: `El id no existe en la tabla ` + model.name });
            return false;
        }
        return true;
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

}

export const encriptacion  = async (textoPlano) => {
    const hash = await bcrypt.hash(textoPlano, 10);
    return hash;
}

export const compararEncriptacion = async (textoPlano, hash) => {
    const comparacion = await bcrypt.compare(textoPlano, hash);
    return comparacion;
}


export const generarToken = async (idSucursal) => {
    const token = jsonwebtoken.sign(
        {
            id: idSucursal,
        },
        JWT_SECRET,
        
    );

    return token;
}

export const verificarToken = async ( token) => {
    try {
        return jsonwebtoken.verify(token, JWT_SECRET);
    } catch (error) {
        return null;
    }
}