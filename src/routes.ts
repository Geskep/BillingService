import {Application, Request, Response, NextFunction} from "express";
import {UsersController} from './controllers/users';

export class Routes {

    public static init(app: Application): void {
        let routes: {[index: string]: any} = {
            "/": {
                get: (req: Request, res: Response, next: NextFunction) => {
                    res.send({a: 3})
                }
            },
            "/users": {
                get: (req: Request, res: Response, next: NextFunction) => {
                    res.send({a: 3})
                },
                put: (req: Request, res: Response, next: NextFunction) => {
                    res.send({a: 3})
                },
                post: (req: Request, res: Response, next: NextFunction) => {
                    res.send(UsersController.create(req.body));
                },
                delete: (req: Request, res: Response, next: NextFunction) => {
                    res.send({a: 3})
                }
            }
        };

        for(let path in routes){
            let methods = routes[path];
            let route = app.route(path);
            if(methods.get) route.get(methods.get);
            if(methods.put) route.put(methods.put);
            if(methods.post) route.post(methods.post);
            if(methods.delete) route.delete(methods.delete);
        }
    }

}