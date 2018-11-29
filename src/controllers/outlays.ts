import {Outlay} from '../models/outlay';
import {IncomesController} from './incomes';

export class OutlaysController{

    static get(data: any){
        const filter = data['q'] ? JSON.parse(data['q']) : {};
        const proj = data['p'] ? JSON.parse(data['p']) : {};
        const opts = data['o'] ? JSON.parse(data['o']) : {};
        return new Promise((resolve, reject) => {
            resolve(Outlay.find(filter, proj, opts).skip(0).limit(10));
        });
    }

    static find(id: number){
        return new Promise((resolve, reject) => {
            resolve(Outlay.findById(id));
        });
    }

    static update(id: number, data: any){
        return new Promise((resolve, reject) => {
            resolve(Outlay.findByIdAndUpdate(id, data));
        });
    }

    static create(data: any){
        return new Promise((resolve, reject) => {
            new Outlay(data).save().then(
                (outlay: any) => {
                    resolve(outlay);
                    IncomesController.setPayed(outlay['associatedId'], outlay['_id']);
                },
                (err) => { reject(err); }
            );
        });
    }
}