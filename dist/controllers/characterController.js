"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCharacterEpisodes = exports.getAllCharacters = void 0;
const Character_1 = __importDefault(require("../models/Character"));
const Location_1 = __importDefault(require("../models/Location"));
const getAllCharacters = async (req, res) => {
    const { location, status } = req.query;
    try {
        let includeLocation;
        let statusQuery;
        if (location) {
            includeLocation = [{ model: Location_1.default, where: { name: location } }];
        }
        if (status) {
            statusQuery = {
                status: status,
            };
        }
        let sortByValue;
        sortByValue = Object.values(req.query)[0];
        console.log(sortByValue);
        if ((sortByValue && sortByValue === 'firstName') ||
            sortByValue === 'gender' ||
            sortByValue === 'lastName') {
            const characters = await Character_1.default.findAll({
                where: statusQuery && statusQuery,
                include: includeLocation && includeLocation,
                order: [[sortByValue, 'ASC']],
            });
            return res.json(characters);
        }
        res.status(404).json({
            message: 'No record Match',
        });
    }
    catch (err) {
        res.status(500).json({ message: 'Something went wrong' });
        console.log(err);
    }
};
exports.getAllCharacters = getAllCharacters;
const getCharacterEpisodes = async (req, res) => {
    const characterId = req.params.characterId;
    try {
        const character = await Character_1.default.findOne({
            where: { id: characterId },
        });
        if (!character)
            return res.status(404).json({ message: 'Not found' });
        const episodes = await character.getEpisodes();
        res.json(episodes);
    }
    catch (err) {
        res.status(500).json({ message: 'Something went wrong' });
        console.log(err);
    }
};
exports.getCharacterEpisodes = getCharacterEpisodes;
