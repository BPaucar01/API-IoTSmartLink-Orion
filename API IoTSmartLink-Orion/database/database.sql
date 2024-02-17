-- Volcando estructura de base de datos para iotsmartlink-orion
CREATE DATABASE IF NOT EXISTS `iotsmartlink-orion` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `iotsmartlink-orion`;

-- Volcando estructura para tabla iotsmartlink-orion.contenedor
CREATE TABLE IF NOT EXISTS `contenedor` (
  `idContenedor` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `idSucursal` int(10) unsigned NOT NULL,
  `idTipoContenedor` int(10) unsigned NOT NULL,
  `idUmbral` int(10) unsigned NOT NULL,
  `codigo` varchar(255) NOT NULL,
  `fecha_creacion` datetime NOT NULL,
  PRIMARY KEY (`idContenedor`),
  KEY `idSucursal` (`idSucursal`),
  KEY `idTipoContenedor` (`idTipoContenedor`),
  KEY `idUmbral` (`idUmbral`),
  CONSTRAINT `contenedor_ibfk_1` FOREIGN KEY (`idSucursal`) REFERENCES `sucursal_tenant` (`idSucursal`),
  CONSTRAINT `contenedor_ibfk_2` FOREIGN KEY (`idTipoContenedor`) REFERENCES `tipo_contenedor` (`idTipoContenedor`),
  CONSTRAINT `contenedor_ibfk_3` FOREIGN KEY (`idUmbral`) REFERENCES `umbral` (`idUmbral`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


-- Volcando estructura para tabla iotsmartlink-orion.dispositivoiot
CREATE TABLE IF NOT EXISTS `dispositivoiot` (
  `idDispositivoIoT` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `idContenedor` int(10) unsigned NOT NULL,
  `idGateway` int(10) unsigned NOT NULL,
  `idSucursal` int(10) unsigned NOT NULL,
  `modelo` varchar(255) NOT NULL,
  `devEUI` varchar(255) NOT NULL,
  `numeroSerie` varchar(255) NOT NULL,
  `fecha_creacion` datetime NOT NULL,
  PRIMARY KEY (`idDispositivoIoT`),
  KEY `idContenedor` (`idContenedor`),
  KEY `idGateway` (`idGateway`),
  KEY `idSucursal` (`idSucursal`),
  CONSTRAINT `dispositivoiot_ibfk_1` FOREIGN KEY (`idContenedor`) REFERENCES `contenedor` (`idContenedor`),
  CONSTRAINT `dispositivoiot_ibfk_2` FOREIGN KEY (`idGateway`) REFERENCES `gateway` (`idGateway`),
  CONSTRAINT `dispositivoiot_ibfk_3` FOREIGN KEY (`idSucursal`) REFERENCES `sucursal_tenant` (`idSucursal`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando estructura para tabla iotsmartlink-orion.gateway
CREATE TABLE IF NOT EXISTS `gateway` (
  `idGateway` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `idSucursal` int(10) unsigned NOT NULL,
  `modelo` varchar(255) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `direccionMAC` char(17) NOT NULL,
  `fecha_creacion` datetime NOT NULL,
  PRIMARY KEY (`idGateway`),
  KEY `idSucursal` (`idSucursal`),
  CONSTRAINT `gateway_ibfk_1` FOREIGN KEY (`idSucursal`) REFERENCES `sucursal_tenant` (`idSucursal`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


-- Volcando estructura para tabla iotsmartlink-orion.laboratorio
CREATE TABLE IF NOT EXISTS `laboratorio` (
  `idLaboratorio` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `fecha_creacion` datetime NOT NULL,
  PRIMARY KEY (`idLaboratorio`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


-- Volcando estructura para tabla iotsmartlink-orion.medicion
CREATE TABLE IF NOT EXISTS `medicion` (
  `idMedicion` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `idTipoMedicion` int(10) unsigned NOT NULL,
  `idDispositivoIoT` int(10) unsigned NOT NULL,
  `medicion` decimal(10,2) NOT NULL,
  `fecha_creacion` datetime NOT NULL,
  PRIMARY KEY (`idMedicion`),
  KEY `idTipoMedicion` (`idTipoMedicion`),
  KEY `idDispositivoIoT` (`idDispositivoIoT`),
  CONSTRAINT `medicion_ibfk_1` FOREIGN KEY (`idTipoMedicion`) REFERENCES `tipo_medicion` (`idTipoMedicion`),
  CONSTRAINT `medicion_ibfk_2` FOREIGN KEY (`idDispositivoIoT`) REFERENCES `dispositivoiot` (`idDispositivoIoT`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


-- Volcando estructura para tabla iotsmartlink-orion.sucursal_tenant
CREATE TABLE IF NOT EXISTS `sucursal_tenant` (
  `idSucursal` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `idLaboratorio` int(10) unsigned NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `pais` varchar(100) NOT NULL,
  `provincia` varchar(100) NOT NULL,
  `ciudad` varchar(100) NOT NULL,
  `direccion` varchar(255) NOT NULL,
  `fecha_creacion` datetime NOT NULL,
  PRIMARY KEY (`idSucursal`),
  KEY `idLaboratorio` (`idLaboratorio`),
  CONSTRAINT `sucursal_tenant_ibfk_1` FOREIGN KEY (`idLaboratorio`) REFERENCES `laboratorio` (`idLaboratorio`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;



-- Volcando estructura para tabla iotsmartlink-orion.tipo_contenedor
CREATE TABLE IF NOT EXISTS `tipo_contenedor` (
  `idTipoContenedor` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `tipo` varchar(255) NOT NULL,
  `fecha_creacion` datetime NOT NULL,
  PRIMARY KEY (`idTipoContenedor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;



-- Volcando estructura para tabla iotsmartlink-orion.tipo_medicion
CREATE TABLE IF NOT EXISTS `tipo_medicion` (
  `idTipoMedicion` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `unidad` varchar(255) NOT NULL,
  `fecha_creacion` datetime NOT NULL,
  PRIMARY KEY (`idTipoMedicion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;



-- Volcando estructura para tabla iotsmartlink-orion.umbral
CREATE TABLE IF NOT EXISTS `umbral` (
  `idUmbral` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `idTipoMedicion` int(10) unsigned NOT NULL,
  `valor_maximo` decimal(10,1) NOT NULL,
  `valor_minimo` decimal(10,1) NOT NULL,
  `fecha_creacion` datetime NOT NULL,
  PRIMARY KEY (`idUmbral`),
  KEY `idTipoMedicion` (`idTipoMedicion`),
  CONSTRAINT `umbral_ibfk_1` FOREIGN KEY (`idTipoMedicion`) REFERENCES `tipo_medicion` (`idTipoMedicion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;



-- Volcando estructura para tabla iotsmartlink-orion.usuario
CREATE TABLE IF NOT EXISTS `usuario` (
  `idUsuario` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `idSucursal` int(10) unsigned NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `fecha_creacion` datetime NOT NULL,
  PRIMARY KEY (`idUsuario`),
  KEY `idSucursal` (`idSucursal`),
  CONSTRAINT `usuario_ibfk_1` FOREIGN KEY (`idSucursal`) REFERENCES `sucursal_tenant` (`idSucursal`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

