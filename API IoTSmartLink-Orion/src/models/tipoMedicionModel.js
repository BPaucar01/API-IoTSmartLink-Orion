import DataTypes from 'sequelize';
import { database } from '../../database.js';


export const tipoMedicionModel = database.define('tipo_medicion', {
    idTipoMedicion: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    unidad: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fecha_creacion: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: 'tipo_medicion',
});

