import { Router } from "express";
import { authController } from "../controllers/authController.js";
import { validarDatosCrearUsuario, validarDatosLoginUsuario } from "../middleware/authMiddleware.js";

const router = Router();

router.post('/registrar', validarDatosCrearUsuario , authController.registrarUsuario);
router.post('/login', validarDatosLoginUsuario, authController.loginUsuario);


export default router;

