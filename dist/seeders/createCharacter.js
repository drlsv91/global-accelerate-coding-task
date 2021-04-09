"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Character_1 = __importStar(require("../models/Character"));
async function createCharacters() {
    try {
        await Character_1.default.bulkCreate([
            {
                firstName: 'John',
                lastName: 'Doe',
                status: Character_1.Status.ACTIVE,
                stateOfOrigin: 'Lagos',
                gender: Character_1.Gender.MALE,
                created: new Date(),
            },
            {
                firstName: 'Mark',
                lastName: 'Kings',
                status: Character_1.Status.UNKNOWN,
                stateOfOrigin: 'Kano',
                gender: Character_1.Gender.MALE,
                created: new Date(),
            },
            {
                firstName: 'Ada',
                lastName: 'Matthew',
                status: Character_1.Status.ACTIVE,
                stateOfOrigin: 'Abuja',
                gender: Character_1.Gender.FEMALE,
                created: new Date(),
            },
        ]);
        // console.log(character.get())
        console.log('character created');
    }
    catch (err) {
        console.log('could not create character ', err);
    }
}
exports.default = createCharacters;
