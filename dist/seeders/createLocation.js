"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Location_1 = __importDefault(require("../models/Location"));
async function createLocation() {
    try {
        await Location_1.default.bulkCreate([
            {
                name: 'Lagos',
                latitude: 119.8179,
                longitude: 36.7883,
                characterId: 1,
                created: new Date(),
            },
            {
                name: 'California',
                latitude: 119.4179,
                longitude: 36.7783,
                characterId: 2,
                created: new Date(),
            },
            {
                name: 'Albania',
                latitude: 119.4379,
                longitude: 36.7883,
                characterId: 3,
                created: new Date(),
            },
        ]);
        console.log('location created..');
    }
    catch (err) {
        console.log('failed to create location ', err);
    }
}
exports.default = createLocation;
