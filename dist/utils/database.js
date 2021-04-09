"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("config"));
console.log(config_1.default.get('db_username'));
console.log(config_1.default.get('db_password'));
const sequelize = new sequelize_1.Sequelize('global-accelerate-task', config_1.default.get('db_username'), config_1.default.get('db_password'), { dialect: 'mysql', host: 'localhost' });
exports.default = sequelize;
