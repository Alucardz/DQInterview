import { Applicant } from './applicant';
import { Questionnaire } from './questionnaire';

export class Interview {


    private _Id: number;
    public get Id(): number {
        return this._Id;
    }
    public set Id(v: number) {
        this._Id = v;
    }


    private _Applicant: Applicant;
    public get Applicant(): Applicant {
        return this._Applicant;
    }
    public set Applicant(v: Applicant) {
        this._Applicant = v;
    }

    
    private _Questionnaire : Questionnaire;
    public get Questionnaire() : Questionnaire {
        return this._Questionnaire;
    }
    public set Questionnaire(v : Questionnaire) {
        this._Questionnaire = v;
    }
    

    private _answers: Answer[];
    public get Answers(): Answer[] {
        return this._answers;
    }
    public set Answers(v: Answer[]) {
        this._answers = v;
    }


}

class Answer {
    constructor(parameters) {

    }

    private _answerIndex: number;
    public get AnswerIndex(): number {
        return this._answerIndex;
    }
    public set AnswerIndex(v: number) {
        this._answerIndex = v;
    }


    private _comment: string;
    public get Comment(): string {
        return this._comment;
    }
    public set Comment(v: string) {
        this._comment = v;
    }


}
