import DataTypes from 'sequelize';
import { database } from '../../database.js';


export const gatewayModel = database.define('gateway', {
    idGateway: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idSucursal: {
        type: DataTypes.INTEGER,
        allowNull: false
    
    },
    modelo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    direccionMAC: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fecha_creacion: {
        type: DataTypes.DATE,
        allowNull: false
    }
    
}, {
    tableName: 'gateway',
    timestamps: false
});
