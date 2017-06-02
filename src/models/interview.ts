import { Question } from './question';
export class Interview {

    
    private _Id : string;
    public get Id() : string {
        return this._Id;
    }
    public set Id(v : string) {
        this._Id = v;
    }

    
    private _answers : AnsweredQuestion[]     ;
    public get Answers() : AnsweredQuestion[]      {
        return this._answers;
    }
    public set Answers(v : AnsweredQuestion[]     ) {
        this._answers = v;
    }
    
    
}

class AnsweredQuestion extends Question {
    constructor(parameters) {
        super(parameters);
    }
        
    private _answerIndex : number;
    public get AnswerIndex() : number {
        return this._answerIndex;
    }
    public set AnswerIndex(v : number) {
        this._answerIndex = v;
    }
    
       
    private _comment : string;
    public get Comment() : string {
        return this._comment;
    }
    public set Comment(v : string) {
        this._comment = v;
    }
    

}
