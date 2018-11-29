import {Deductible} from '../models/deductible';

export class DeductiblesController{

    static get(data: any){
        return new Promise((resolve, reject) => {
            resolve(Deductible.find().skip(0).limit(10));
        });
    }

    static find(id: number){
        return new Promise((resolve, reject) => {
            resolve(Deductible.findById(id));
        });
    }

    static update(id: number, data: any){
        return new Promise((resolve, reject) => {
            resolve(Deductible.findByIdAndUpdate(id, data));
        });
    }

    static create(data: any){
        return new Deductible(data).save()
    }
}