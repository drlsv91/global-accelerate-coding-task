"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createCharacter_1 = __importDefault(require("./createCharacter"));
const createComment_1 = __importDefault(require("./createComment"));
const createEpisode_1 = __importDefault(require("./createEpisode"));
const createLocation_1 = __importDefault(require("./createLocation"));
async function seed() {
    await createCharacter_1.default();
    await createEpisode_1.default();
    await createComment_1.default();
    createLocation_1.default();
}
exports.default = seed;
