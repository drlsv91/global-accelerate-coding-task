"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const characterController_1 = require("../controllers/characterController");
const router = express_1.Router();
router.route('/').get(characterController_1.getAllCharacters);
router.get('/:characterId/episodes', characterController_1.getCharacterEpisodes);
exports.default = router;
