import { Router } from "express";
import { gatewayController } from "../controllers/gatewayController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { validarDatosIngresarGateway, validarIdGateway } from "../middleware/gatewayMiddleware.js";

const router = Router();

router.get("/gateway",authMiddleware, gatewayController.obtenerTodosGateways)
router.get("/gateway/:idGateway",authMiddleware, validarIdGateway, gatewayController.obtenerGatewayPorId)
router.post("/gateway",authMiddleware, validarDatosIngresarGateway, gatewayController.crearGateway)

export default router;