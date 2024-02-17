import DataTypes from 'sequelize';
import { database } from '../../database.js';

export const tipoContenedorModel = database.define('tipoContenedor', {
    idTipoContenedor: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tipo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fecha_creacion: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    tableName: 'tipo_contenedor',
    timestamps: false
})