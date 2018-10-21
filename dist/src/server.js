"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const parser = __importStar(require("body-parser"));
const mongoose_1 = require("mongoose");
const conf = __importStar(require("../dbconf.json"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        routes_1.Routes.init(this.app);
    }
    start() {
        this.app.listen(80, () => { console.log("Server Started!"); });
    }
    config() {
        this.app.use(parser.json());
        this.app.use(parser.urlencoded({ extended: false }));
        let dbconf = conf;
        let params = Object.keys(dbconf.params).map((key) => {
            return key + "=" + dbconf.params[key];
        }).join("&");
        let uri = 'mongodb://' + dbconf.user + ':' + dbconf.password + '@' + dbconf.hosts.join() + '/' + dbconf.database + '?' + params;
        console.log(uri);
        mongoose_1.connect(uri, { useNewUrlParser: true });
        mongoose_1.set('useCreateIndex', true);
    }
}
let server = new Server();
server.start();
//# sourceMappingURL=server.js.map