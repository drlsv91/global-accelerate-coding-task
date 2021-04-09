"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllComments = void 0;
const Comment_1 = __importDefault(require("../models/Comment"));
const getAllComments = async (req, res) => {
    // the most recent comment comes first
    try {
        const comments = await Comment_1.default.findAll({
            order: [['created', 'DESC']],
        });
        res.json(comments);
    }
    catch (err) {
        res.status(500).json({ message: 'Something went wrong' });
        console.log(err);
    }
};
exports.getAllComments = getAllComments;
