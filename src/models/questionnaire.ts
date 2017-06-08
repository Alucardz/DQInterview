import { Question } from './question';
export class Questionnaire {
    constructor(parameters) {
        for (let f in parameters) {
            this[f] = parameters[f];
        }
    }

    
    private _Id : number;
    public get Id() : number {
        return this._Id;
    }
    public set Id(v : number) {
        this._Id = v;
    }

    
    private _Questions : Question[];
    public get Questions() : Question[] {
        return this._Questions;
    }
    public set Questions(v : Question[]) {
        this._Questions = v;
    }
    
    
}