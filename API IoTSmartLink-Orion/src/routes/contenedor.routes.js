import { Router } from "express";
import { contenedorController } from "../controllers/contenedorController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { validarDatosIngresarContenedor, validarIdContenedor } from "../middleware/contenedorMiddleware.js";

const router = Router();

router.get("/contenedor",authMiddleware, contenedorController.obtenerTodosContenedores)
router.get("/contenedor/:idContenedor", authMiddleware, validarIdContenedor, contenedorController.obtenerContenedorPorId)
router.post("/contenedor",authMiddleware, validarDatosIngresarContenedor,contenedorController.crearContenedor)

export default router;