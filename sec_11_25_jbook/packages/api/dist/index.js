"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serve = void 0;
var path_1 = __importDefault(require("path"));
var express_1 = __importDefault(require("express"));
var http_proxy_middleware_1 = require("http-proxy-middleware");
var cells_1 = require("./routes/cells");
var serve = function (port, fileName, dir, devMode) {
    var server = (0, express_1.default)();
    server.use(express_1.default.json());
    // why is this middleware placed here? -> vid 296
    server.use((0, cells_1.setCellsRouter)(fileName, dir));
    // the 2 execution environments in which the React assets can be served up:
    if (devMode) {
        // dev mode: the create-react-app server's running
        server.use((0, http_proxy_middleware_1.createProxyMiddleware)({
            target: 'http://localhost:3000',
            ws: true,
            logLevel: 'silent'
        }));
    }
    else {
        // production mode: cli is installed in a user's local machine
        var clientBuildPath = require.resolve('client/build/index.html');
        server.use(express_1.default.static(path_1.default.dirname(clientBuildPath)));
    }
    return new Promise(function (resolve, reject) {
        server.listen(port, resolve).on('error', reject);
    });
};
exports.serve = serve;
