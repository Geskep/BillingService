import express from 'express';
import {Routes} from './routes';
import * as parser from 'body-parser';
import {connect, set} from 'mongoose';
import * as conf from '../dbconf.json';

class Server {

    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
        Routes.init(this.app);
    }

    start(){
        this.app.listen(80, () => {console.log("Server Started!")});
    }

    private config(): void {
        this.app.use(parser.json());
        this.app.use(parser.urlencoded({extended: false}));
        let dbconf = (<any>conf);
        let params = Object.keys(dbconf.params).map((key) => {
            return key + "=" + dbconf.params[key];
        }).join("&");
        let uri = 'mongodb://' + dbconf.user + ':' + dbconf.password + '@' + dbconf.hosts.join() + '/' + dbconf.database + '?' + params;
        connect(uri, {useNewUrlParser: true});
        set('useCreateIndex', true);
    }
}

let server = new Server();
server.start();