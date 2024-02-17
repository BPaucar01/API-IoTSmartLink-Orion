import { Router } from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { validarDatosIngresarTipoMedicion, validarIdTipoMedicion, validarNombreTipoMedicion } from "../middleware/tipoMedicionMiddleware.js";
import { tipoMedicionController } from "../controllers/tipoMedicionController.js";

const router = Router();

router.get("/tipoMedicion",authMiddleware, tipoMedicionController.obtenerTodosTiposMedicion)
router.get("/tipoMedicion/:idTipoMedicion",authMiddleware, validarIdTipoMedicion, tipoMedicionController.obtenerTipoMedicionPorId)
router.get("/tipoMedicion/nombre/:nombre",authMiddleware,validarNombreTipoMedicion, tipoMedicionController.obtenerTipoMedicionPorNombre)
router.post("/tipoMedicion",authMiddleware, validarDatosIngresarTipoMedicion, tipoMedicionController.crearTipoMedicion)
router.put("/tipoMedicion/:idTipoMedicion",authMiddleware, validarIdTipoMedicion, validarDatosIngresarTipoMedicion, tipoMedicionController.actualizarTipoMedicion)

export default router;