"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Character_1 = __importDefault(require("../models/Character"));
const Episode_1 = __importDefault(require("../models/Episode"));
async function createEpisode() {
    try {
        const episode = await Episode_1.default.bulkCreate([
            {
                name: 'Episode 1',
                releaseDate: new Date('7/7/2019'),
                episodeCode: 'CC21',
                created: new Date(),
            },
            {
                name: 'Episode 11',
                releaseDate: new Date('7/6/2020'),
                episodeCode: 'CC22',
                created: new Date(),
            },
        ]);
        const characters = await Character_1.default.findAll({
            where: { id: [1, 2] },
            include: ['episodes'],
        });
        characters.forEach(async (character, i) => {
            await character.addEpisode(episode[i]);
        });
        console.log('episode created successfully');
    }
    catch (err) {
        console.log('could not create episode ', err);
    }
}
exports.default = createEpisode;
