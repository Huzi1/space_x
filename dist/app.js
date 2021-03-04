"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const body_parser_1 = __importDefault(require("body-parser"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const app = express_1.default();
const port = process.env.PORT || 5000;
let env = process.env["NODE_ENV"];
app.use(cors_1.default());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(routes_1.default);
// Rest api here 
app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
});
app.post('/api/world', (req, res) => {
    console.log(req.body);
    res.send(`I received your POST request. This is what we sent me: ${req.body.post}`);
});
if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express_1.default.static(path_1.default.join(__dirname, 'client/build')));
    // Handle React routing, return all requests to React app
    app.get('*', function (req, res) {
        res.sendFile(path_1.default.join(__dirname, 'client/build', 'index.html'));
    });
}
app.listen(port, () => console.log(`Server Listening on port ${port}`));
//# sourceMappingURL=app.js.map