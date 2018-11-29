import {Income} from '../models/income';

export class IncomesController{

    static get(data: any){
        const filter = data['q'] ? JSON.parse(data['q']) : {};
        const proj = data['p'] ? JSON.parse(data['p']) : {};
        const opts = data['o'] ? JSON.parse(data['o']) : {};
        return new Promise((resolve, reject) => {
            resolve(Income.find(filter, proj, opts).skip(0).limit(10));
        });
    }

    static find(id: number){
        return new Promise((resolve, reject) => {
            resolve(Income.findById(id));
        });
    }

    static update(id: number, data: any){
        return new Promise((resolve, reject) => {
            resolve(Income.findByIdAndUpdate(id, data));
        });
    }

    static setPayed(associated: string, outlay: string){
        return new Promise((resolve, reject) => {
            resolve(Income.update({associatedId: associated, payed: null}, {$set: {payed: outlay}}, {multi: true}));
        });
    }

    static create(data: any){
        return new Income(data).save()
    }
}