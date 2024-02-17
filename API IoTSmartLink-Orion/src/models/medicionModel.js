import DataTypes from 'sequelize';
import { database } from '../../database.js';
import { dispositivoIoTModel } from './dispositivoIoTModel.js';
import { tipoMedicionModel } from './tipoMedicionModel.js';

export const medicionModel = database.define('medicion', {
    idMedicion : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idTipoMedicion: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idDispositivoIoT: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    valorMedicion: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    estado: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fecha_creacion: {
        type: DataTypes.DATE,
        allowNull: false
    }
},{
    tableName: 'medicion',
    timestamps: false
});

medicionModel.belongsTo(dispositivoIoTModel, { foreignKey: 'idDispositivoIoT' });
medicionModel.belongsTo(tipoMedicionModel, { foreignKey: 'idTipoMedicion' });