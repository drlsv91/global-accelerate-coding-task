"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Episode_1 = __importDefault(require("../models/Episode"));
const Comment_1 = __importDefault(require("../models/Comment"));
const Character_1 = __importDefault(require("../models/Character"));
const Location_1 = __importDefault(require("../models/Location"));
const CharactersEpisode_1 = __importDefault(require("../models/CharactersEpisode"));
function createAssociation() {
    // association
    // episode has many comments and
    Episode_1.default.hasMany(Comment_1.default, {
        foreignKey: 'episodeId',
        as: 'comments',
    });
    // CommentModel.belongsTo(EpisodeModel)
    // character can feature in many episode
    Character_1.default.belongsToMany(Episode_1.default, {
        through: 'CharactersEpisode',
        foreignKey: 'characterId',
        as: 'episodes',
    });
    // episode can have many characters
    Episode_1.default.belongsToMany(Character_1.default, {
        through: 'CharactersEpisode',
        foreignKey: 'episodeId',
        as: 'characters',
    });
    // character has one location
    Character_1.default.hasOne(Location_1.default, {
        foreignKey: 'characterId',
    });
    // LocationModel.belongsTo(CharacterModel, {
    //   foreignKey
    // })
    CharactersEpisode_1.default.belongsTo(Character_1.default, {
        foreignKey: 'characterId',
    });
    CharactersEpisode_1.default.belongsTo(Episode_1.default, {
        foreignKey: 'episodeId',
    });
}
exports.default = createAssociation;
