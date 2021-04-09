"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const episodeController_1 = require("../controllers/episodeController");
const router = express_1.Router();
router.get('/', episodeController_1.getAllEpisode);
router.post('/:episodeId/comments', episodeController_1.createComment);
exports.default = router;
