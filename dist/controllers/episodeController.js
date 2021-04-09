"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createComment = exports.getAllEpisode = void 0;
const sequelize_1 = require("sequelize");
const Comment_1 = __importDefault(require("../models/Comment"));
const Episode_1 = __importDefault(require("../models/Episode"));
const validation_1 = require("../utils/validation");
const getAllEpisode = async function (req, res) {
    try {
        const episodes = await Episode_1.default.findAll({
            attributes: {
                include: [
                    [sequelize_1.Sequelize.fn('COUNT', sequelize_1.Sequelize.col('comments.id')), 'commentCount'],
                ],
            },
            order: [['releaseDate', 'ASC']],
            include: [
                {
                    model: Comment_1.default,
                    as: 'comments',
                    attributes: [],
                },
            ],
            group: ['comments.episodeId'],
        });
        res.json(episodes);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'something went wrong' });
    }
};
exports.getAllEpisode = getAllEpisode;
const createComment = async function (req, res) {
    const { episodeId } = req.params;
    let { comment, ipAddressLocation, created } = req.body;
    const errors = validation_1.validateCommentData(comment, ipAddressLocation, created);
    if (errors) {
        return res.status(400).json({ message: errors });
    }
    created = new Date(created);
    try {
        const episode = await Episode_1.default.findOne({ where: { id: episodeId } });
        const createdComment = await episode.createComment({
            comment,
            ipAddressLocation,
            created,
        });
        res.json(createdComment);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Something went wrong' });
    }
};
exports.createComment = createComment;
