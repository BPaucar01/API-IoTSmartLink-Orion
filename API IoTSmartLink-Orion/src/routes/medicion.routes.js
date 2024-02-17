
import { Router } from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { medicionController } from "../controllers/medicionController.js";
import { validarDatosObtenerMediciones, validarDatosIngresarMedicion } from "../middleware/medicionMiddleware.js"; 

const router = Router();

router.get("/medicion", authMiddleware, validarDatosObtenerMediciones , medicionController.obtenerTodasMediciones)
router.post("/medicion", authMiddleware,validarDatosIngresarMedicion, medicionController.crearMedicion)

export default router;