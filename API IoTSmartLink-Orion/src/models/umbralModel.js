import DataTypes from 'sequelize';
import { database } from '../../database.js';
import { tipoMedicionModel } from './tipoMedicionModel.js';

export const umbralModel = database.define('umbral', {
    idUmbral: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idTipoMedicion: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idSucursal: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    valor_maximo: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    valor_minimo: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    
    fecha_creacion: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    tableName: 'umbral',
    timestamps: false
})

umbralModel.belongsTo(tipoMedicionModel, { foreignKey: 'idTipoMedicion' });