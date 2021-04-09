"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const commentsController_1 = require("../controllers/commentsController");
const router = express_1.Router();
router.get('/', commentsController_1.getAllComments);
exports.default = router;
