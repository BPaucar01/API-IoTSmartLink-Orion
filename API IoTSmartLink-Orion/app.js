import express from "express"
import medicionRoutes from "./src/routes/medicion.routes.js"
import contenedorRoutes from "./src/routes/contenedor.routes.js"
import tipoContenedorRoutes from "./src/routes/tipoContenedor.routes.js"
import gatewayRoutes from "./src/routes/gateway.routes.js"
import umbralRoutes from "./src/routes/umbral.routes.js"
import tipoMedicionRoutes from "./src/routes/tipoMediciones.routes.js"
import usuarioRoutes from "./src/routes/auth.routes.js"
import dispositivoioTRoutes from "./src/routes/dispositivoiot.routes.js"

const app = express()
app.use(express.json())


app.use("/api/v1",medicionRoutes)
app.use("/api/v1",contenedorRoutes)
app.use("/api/v1",gatewayRoutes)
app.use("/api/v1",umbralRoutes)
app.use("/api/v1",tipoMedicionRoutes)
app.use("/api/v1",tipoContenedorRoutes)
app.use("/api/v1",usuarioRoutes)
app.use("/api/v1",dispositivoioTRoutes)


app.use((req, res, next) => {
    res.status(404).json({ message: "Recurso no encontrado" })
})

export default app;