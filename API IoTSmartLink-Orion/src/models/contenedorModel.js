import DataTypes from 'sequelize';
import { database } from '../../database.js';
import { tipoContenedorModel } from './tipoContenedorModel.js';
import { umbralModel } from './umbralModel.js';

export const contenedorModel = database.define('contenedor', {
    idContenedor: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idSucursal: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idTipoContenedor: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idUmbral: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    codigo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fecha_creacion: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    tableName: 'contenedor',
    timestamps: false
})

contenedorModel.belongsTo(tipoContenedorModel, { foreignKey: 'idTipoContenedor' });
contenedorModel.belongsTo(umbralModel, { foreignKey: 'idUmbral' });