import { Router } from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { validarDatosIngresarTipoContenedor, validarIdTipoContenedor } from "../middleware/tipoContenedorMiddleware.js";
import { tipoContenedorController } from "../controllers/tipoContenedorController.js";


const router = Router();

router.get("/tipoContenedor",authMiddleware, tipoContenedorController.obtenerTodosTiposContenedor)
router.get("/tipoContenedor/:idTipoContenedor",authMiddleware, validarIdTipoContenedor, tipoContenedorController.obtenerTipoContenedorPorId)
router.post("/tipoContenedor",authMiddleware, validarDatosIngresarTipoContenedor, tipoContenedorController.crearTipoContenedor)
router.put("/tipoContenedor/:idTipoContenedor",authMiddleware, validarIdTipoContenedor, validarDatosIngresarTipoContenedor, tipoContenedorController.actualizarTipoContenedor)

export default router;