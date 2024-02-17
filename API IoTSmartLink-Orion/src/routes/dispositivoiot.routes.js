import { Router } from "express";
import { dispositivoIoTController } from "../controllers/dispositivoIoTController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { validarIdDispositivoIoT,validarDevEUIDispositivoIoT } from "../middleware/dispositivoIoTMiddleware.js";

const router = Router();

router.get("/dispositivoIoT",authMiddleware, dispositivoIoTController.obtenerTodosDispositivosIoT)
router.get("/dispositivoIoT/:idDispositivoIoT", authMiddleware, validarIdDispositivoIoT, dispositivoIoTController.obtenerDispositivoIoTPorId)
router.get("/dispositivoIoT/devEUI/:devEUI", authMiddleware, dispositivoIoTController.obtenerDispositivoIoTPorDevEUI)

export default router;