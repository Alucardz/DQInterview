import { Interview } from './interview';
import { Question } from './question';

export class Answer {
    constructor(parameters) {
        for (let f in parameters) {
            this[f] = parameters[f];
        }
    }

    private _Id: string;
    public get Id(): string {
        return this._Id;
    }
    public set Id(v: string) {
        this._Id = v;
    }


    private _AnswerIndex: number;
    public get AnswerIndex(): number {
        return this._AnswerIndex;
    }
    public set AnswerIndex(v: number) {
        this._AnswerIndex = v;
    }


    private _Comment: string;
    public get Comment(): string {
        return this._Comment;
    }
    public set Comment(v: string) {
        this._Comment = v;
    }

    private _Question: Question;
    public get Question(): Question {
        return this._Question;
    }
    public set Question(v: Question) {
        this._Question = v;
    }

    private _Interview: Interview;
    public get Interview(): Interview {
        return this._Interview;
    }
    public set Interview(v: Interview) {
        this._Interview = v;
    }

}