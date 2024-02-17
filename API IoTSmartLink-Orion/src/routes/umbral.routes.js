import { Router } from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { umbralController } from "../controllers/umbralController.js";
import { validarDatosIngresarUmbral, validarIdUmbral } from "../middleware/umbralMiddleware.js";

const router = Router();

router.get("/umbral",authMiddleware, umbralController.obtenerTodosUmbrales)
router.post("/umbral",authMiddleware, validarDatosIngresarUmbral, umbralController.crearUmbral)
router.get("/umbral/:idUmbral",authMiddleware, validarIdUmbral, umbralController.obtenerUmbralPorId)
router.get("/umbral/tipoMedicion/:idTipoMedicion",authMiddleware, umbralController.obtenerUmbralPorIdMedicion)

export default router;