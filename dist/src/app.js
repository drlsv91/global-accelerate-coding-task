"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const database_1 = __importDefault(require("./utils/database"));
const association_1 = __importDefault(require("./utils/association"));
const seed_1 = __importDefault(require("../seeders/seed"));
const app = express_1.default();
app.use(body_parser_1.json());
app.use((err, req, res, next) => {
    res.json({ message: err.message });
});
// createAssociation
// console.log('OK')
association_1.default();
// initialize database
database_1.default
    .sync()
    .then((res) => {
    seed_1.default();
    console.log('successfully initialized');
})
    .catch((err) => console.log(err));
const port = process.env.Port || 3002;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
