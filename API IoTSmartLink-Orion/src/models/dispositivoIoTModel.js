import DataTypes from 'sequelize';
import { database } from '../../database.js';

export const dispositivoIoTModel = database.define('dispositivoIoT', {
    idDispositivoIoT: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    idContenedor: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    idGateway: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    idSucursal: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    modelo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    devEUI: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    numeroSerie: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fecha_creacion: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    }
},{
    tableName: 'dispositivoiot',
    timestamps: false 
});