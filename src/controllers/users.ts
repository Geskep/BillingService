import {User} from '../models/user';

export class UsersController{
    static create(data: any){
        let user = new User(data);
        console.log(user);
        (user.save()
            .then((user) => {
                console.log(user);
                return user;
            })
            .catch((err) => {
                console.log(err);
                return null;
            })
        );
    }
}