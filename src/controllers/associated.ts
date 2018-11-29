import {Associated} from '../models/associated';

export class AssociatedController{

    static get(data: any){
        return new Promise((resolve, reject) => {
            resolve(Associated.find().skip(0).limit(10));
        });
    }

    static find(id: number){
        return new Promise((resolve, reject) => {
            resolve(Associated.findById(id));
        });
    }

    static update(id: number, data: any){
        return new Promise((resolve, reject) => {
            resolve(Associated.findByIdAndUpdate(id, data));
        });
    }

    static create(data: any){
        return new Associated(data).save()
    }
}