"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../utils/database"));
const LocationModel = database_1.default.define('Location', {
    id: {
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    latitude: {
        type: sequelize_1.DataTypes.DOUBLE,
        allowNull: false,
    },
    longitude: {
        type: sequelize_1.DataTypes.DOUBLE,
        allowNull: false,
    },
    created: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
});
exports.default = LocationModel;
