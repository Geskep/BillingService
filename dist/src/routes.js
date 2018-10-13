"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = require("./controllers/users");
class Routes {
    static init(app) {
        let routes = {
            "/": {
                get: (req, res, next) => {
                    res.send({ a: 3 });
                }
            },
            "/users": {
                get: (req, res, next) => {
                    res.send({ a: 3 });
                },
                put: (req, res, next) => {
                    res.send({ a: 3 });
                },
                post: (req, res, next) => {
                    res.send(users_1.UsersController.create(req.body));
                },
                delete: (req, res, next) => {
                    res.send({ a: 3 });
                }
            }
        };
        for (let path in routes) {
            let methods = routes[path];
            let route = app.route(path);
            if (methods.get)
                route.get(methods.get);
            if (methods.put)
                route.put(methods.put);
            if (methods.post)
                route.post(methods.post);
            if (methods.delete)
                route.delete(methods.delete);
        }
    }
}
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map