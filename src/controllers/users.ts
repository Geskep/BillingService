import {User} from '../models/user';

export class UsersController{

    static login(data: any){
        return new Promise((resolve, reject) => {
            User.findOne({username: data.username, password: data.password}, (err, user) => {
                if(err) reject(err);
                else if(!user) reject(new Error("Login failed."));
                else resolve(user);
            });
        });
    }

    static create(data: any){
        return new User(data).save()
    }
}