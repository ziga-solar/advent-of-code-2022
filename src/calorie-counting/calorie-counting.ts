import { readFileSync, promises as fsPromises } from 'fs';
import { join } from 'path';


export class CalorieCounting{
    filename:string;

    constructor(filename: string){
        this.filename = filename;
    }

    getMaxCalories(n: number){
        let stringArray = this.syncReadFile().split("\n");
        let calorieArray: Array<number> = [];

        let tempCalories: number = 0;
        stringArray.forEach(string => {
            if(string === ''){
                calorieArray.push(tempCalories)
                tempCalories = 0;
            } else {
                tempCalories += +string;
            }
        });
        
        return calorieArray.sort((n1,n2) => n2 - n1).slice(0,n).reduce((accumulator, item) => {
            return accumulator + item;
        }, 0);
    }

    private syncReadFile() {
        const result = readFileSync(join(__dirname, this.filename), 'utf-8');

        return result;
    }
};