import {Application, NextFunction, Request, Response} from 'express';
import {UsersController} from './controllers/users';
import {AssociatedController} from './controllers/associated';
import {IncomesController} from './controllers/incomes';
import {DeductiblesController} from './controllers/deductibles';
import {OutlaysController} from './controllers/outlays';

export class Routes {

    public static init(app: Application): void {
        let routes: {[index: string]: any} = {
            "/login": {
                post: (req: Request, res: Response) => {
                    UsersController.login(req.body).then(
                        (user) => {
                            res.send(user);
                        },
                        (err) => {
                            console.log(err);
                            res.sendStatus(401);
                        }
                    );
                }
            },
            "/users": {
                get: (req: Request, res: Response) => {
                    UsersController.get({}).then(
                        (users) => { res.send(users) },
                        (err) => {
                            console.log(err);
                            res.sendStatus(500);
                        }
                    );
                },
                post: (req: Request, res: Response) => {
                    UsersController.create(req.body).then(
                        (user) => { res.send(user) },
                        (err) => {
                            console.log(err);
                            res.sendStatus(500);
                        }
                    );
                },
                delete: (req: Request, res: Response) => {
                    res.send("Sorry. Not implemented.")
                }
            },
            "/users/:id": {
                get: (req: Request, res: Response) => {
                    UsersController.find(req.params['id']).then(
                        (user) => {
                            res.send(user)
                        },
                        (err) => {
                            console.log(err);
                            res.sendStatus(500);
                        }
                    );
                },
                put: (req: Request, res: Response) => {
                    UsersController.update(req.params['id'], req.body).then(
                        (user) => { res.send(user) },
                        (err) => {
                            console.log(err);
                            res.sendStatus(500);
                        }
                    );
                }
            },
            "/associated": {
                get: (req: Request, res: Response) => {
                    AssociatedController.get({}).then(
                        (associated) => { res.send(associated) },
                        (err) => {
                            console.log(err);
                            res.sendStatus(500);
                        }
                    );
                },
                post: (req: Request, res: Response) => {
                    AssociatedController.create(req.body).then(
                        (associated) => { res.send(associated) },
                        (err) => {
                            console.log(err);
                            res.sendStatus(500);
                        }
                    );
                },
                delete: (req: Request, res: Response) => {
                    res.send("Sorry. Not implemented.")
                }
            },
            "/associated/:id": {
                get: (req: Request, res: Response) => {
                    AssociatedController.find(req.params['id']).then(
                        (associated) => {
                            res.send(associated)
                        },
                        (err) => {
                            console.log(err);
                            res.sendStatus(500);
                        }
                    );
                },
                put: (req: Request, res: Response) => {
                    AssociatedController.update(req.params['id'], req.body).then(
                        (associated) => { res.send(associated) },
                        (err) => {
                            console.log(err);
                            res.sendStatus(500);
                        }
                    );
                }
            },
            "/incomes": {
                get: (req: Request, res: Response) => {
                    console.log(req.query);
                    IncomesController.get(req.query).then(
                        (incomes) => { res.send(incomes) },
                        (err) => {
                            console.log(err);
                            res.sendStatus(500);
                        }
                    );
                },
                post: (req: Request, res: Response) => {
                    IncomesController.create(req.body).then(
                        (income) => { res.send(income) },
                        (err) => {
                            console.log(err);
                            res.sendStatus(500);
                        }
                    );
                },
                delete: (req: Request, res: Response) => {
                    res.send("Sorry. Not implemented.")
                }
            },
            "/incomes/:id": {
                get: (req: Request, res: Response) => {
                    IncomesController.find(req.params['id']).then(
                        (income) => {
                            res.send(income)
                        },
                        (err) => {
                            console.log(err);
                            res.sendStatus(500);
                        }
                    );
                },
                put: (req: Request, res: Response) => {
                    res.send("Sorry. Not implemented.")
                }
            },
            "/deductibles": {
                get: (req: Request, res: Response) => {
                    DeductiblesController.get({}).then(
                        (deductibles) => { res.send(deductibles) },
                        (err) => {
                            console.log(err);
                            res.sendStatus(500);
                        }
                    );
                },
                post: (req: Request, res: Response) => {
                    DeductiblesController.create(req.body).then(
                        (deductible) => { res.send(deductible) },
                        (err) => {
                            console.log(err);
                            res.sendStatus(500);
                        }
                    );
                },
                delete: (req: Request, res: Response) => {
                    res.send("Sorry. Not implemented.")
                }
            },
            "/deductibles/:id": {
                get: (req: Request, res: Response) => {
                    DeductiblesController.find(req.params['id']).then(
                        (deductible) => {
                            res.send(deductible)
                        },
                        (err) => {
                            console.log(err);
                            res.sendStatus(500);
                        }
                    );
                },
                put: (req: Request, res: Response) => {
                    DeductiblesController.update(req.params['id'], req.body).then(
                        (deductible) => { res.send(deductible) },
                        (err) => {
                            console.log(err);
                            res.sendStatus(500);
                        }
                    );
                }
            },
            "/outlays": {
                get: (req: Request, res: Response) => {
                    OutlaysController.get(req.query).then(
                        (outlays) => { res.send(outlays) },
                        (err) => {
                            console.log(err);
                            res.sendStatus(500);
                        }
                    );
                },
                post: (req: Request, res: Response) => {
                    OutlaysController.create(req.body).then(
                        (outlay) => { res.send(outlay) },
                        (err) => {
                            console.log(err);
                            res.sendStatus(500);
                        }
                    );
                },
                delete: (req: Request, res: Response) => {
                    res.send("Sorry. Not implemented.")
                }
            },
            "/outlays/:id": {
                get: (req: Request, res: Response) => {
                    OutlaysController.find(req.params['id']).then(
                        (outlay) => {
                            res.send(outlay)
                        },
                        (err) => {
                            console.log(err);
                            res.sendStatus(500);
                        }
                    );
                },
                put: (req: Request, res: Response) => {
                    OutlaysController.update(req.params['id'], req.body).then(
                        (outlay) => { res.send(outlay) },
                        (err) => {
                            console.log(err);
                            res.sendStatus(500);
                        }
                    );
                }
            }
        };

        app.use(function(req: Request, res: Response, next: NextFunction) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, token");
            next();
        });

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