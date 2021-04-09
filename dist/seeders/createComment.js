"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Comment_1 = __importDefault(require("../models/Comment"));
async function createComments() {
    try {
        await Comment_1.default.bulkCreate([
            {
                comment: 'this is a nice episode',
                ipAddressLocation: '192.0.0.8/32',
                created: new Date('7/8/2018'),
                episodeId: 1,
            },
            {
                comment: 'sweet episode',
                ipAddressLocation: '192.0.0.9/22',
                created: new Date('8/8/2020'),
                episodeId: 2,
            },
            {
                comment: 'nice episody',
                ipAddressLocation: '192.0.0.9/12',
                created: new Date(),
                episodeId: 2,
            },
        ]);
        console.log('successfully created comment');
    }
    catch (err) {
        console.log(err);
    }
}
exports.default = createComments;
