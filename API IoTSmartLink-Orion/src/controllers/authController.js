import moment from "moment-timezone";
import { TIMEZONE } from "../config.js";
import { encriptacion, compararEncriptacion, generarToken } from '../helpers/utils.helpers.js'
import { usuarioService } from '../services/usuarioService.js'

export const authController = {
    registrarUsuario: async (req, res) => {
        try {
            const { username, password, idSucursal } = req.body;
            const passwordHash = await encriptacion(password);
            const fecha_creacion = moment().tz(TIMEZONE).format('YYYY-MM-DDTHH:mm:ss.SSS[Z]')
            const datosUsuario = {
                idSucursal,
                username,
                password: passwordHash,
                fecha_creacion
            };
            const idInsertado = await usuarioService.crearUsuario(datosUsuario);
            if (idInsertado !== null) {
                res.status(201).json({
                    mensaje: 'Usuario registrado correctamente.'
                });
            }
        } catch (error) {
            res.status(500).json({ mensaje: 'Error en el servidor.' });
        }
    },

    loginUsuario: async (req, res) => {
        try {
            const { username, password } = req.body;
            const usuario = await usuarioService.obtenerUsuario(username);

            if (!usuario) {
                return res.status(404).json({ mensaje: 'Usuario no encontrado.' });
            }

            const comparacion = await compararEncriptacion(password, usuario.password);

            if (!comparacion) {
                return res.status(401).json({ mensaje: 'Credenciales inválidas.' });
            }
            const token = await generarToken(usuario.idUsuario);

            res.status(201).json({
                mensaje: 'Usuario autenticado correctamente.',token ,usuario });

        } catch (error) {
            res.status(500).json({ mensaje: 'Error en el servidor.' });
        }
    }
}