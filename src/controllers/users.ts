import {User} from '../models/user';

export class UsersController{

    static login(data: any){
        return new Promise((resolve, reject) => {
            User.findOne({username: data.username}, (err, user: any) => {
                if(err) reject(err);
                else if(!user) reject(new Error("Login failed."));
                else{
                    if(user.comparePassword(data.password)){
                        user.generateToken().then(
                            (data: any) => { resolve(data) },
                            (err: any) => { reject(err) }
                        );
                    }
                    else  reject(new Error("Login failed."));
                }
            });
        });
    }

    static get(data: any){
        return new Promise((resolve, reject) => {
            resolve(User.find().skip(0).limit(10));
        });
    }

    static find(id: number){
        return new Promise((resolve, reject) => {
            resolve(User.findById(id));
        });
    }

    static update(id: number, data: any){
        return new Promise((resolve, reject) => {
            resolve(User.findByIdAndUpdate(id, data));
        });
    }

    static create(data: any){
        return new User(data).save()
    }
}