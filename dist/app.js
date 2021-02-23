"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const path_1 = __importDefault(require("path"));
const app = express_1.default();
const port = process.env.PORT || 5000;
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
});
app.post('/api/world', (req, res) => {
    console.log(req.body);
    res.send(`I received your POST request. This is what you sent me: ${req.body.post}`);
});
app.get('/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../my-app/build/index.html'));
});
app.listen(port, () => console.log(`Listening on port ${port}`));
//# sourceMappingURL=app.js.map