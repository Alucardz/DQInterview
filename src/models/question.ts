import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/combineLatest';
/**
 * A generic model that our Master-Detail pages list, create, and delete.
 *
 * Change "Item" to the noun your app will use. For example, a "Contact," or a
 * "Customer," or a "Animal," or something like that.
 *
 * The Items service manages creating instances of Item, so go ahead and rename
 * that something that fits your app as well.
 */
export class Question {

  constructor(private fields: any) {
    // Quick and dirty extend/assign fields to this model
    for (let f in fields) {
      this[f] = fields[f];
    }

    // Observable.combineLatest(this._badAnswer,this._neutralAnswer,this._goodAnswer,this._excellentAnswer).do(
    //   values => {
    //     debugger;
    //     this.AllAnswers = values
    //   }
    // )
    this.AllAnswers = [this._badAnswer,this._neutralAnswer,this._goodAnswer,this._excellentAnswer]
  }


  private _Id: number;
  public get Id(): number {
    return this._Id;
  }
  public set Id(v: number) {
    this._Id = v;
  }


  private _questionText: string;
  public get QuestionText(): string {
    return this._questionText;
  }
  public set QuestionText(v: string) {
    this._questionText = v;
  }


  private _badAnswer: string;
  public get badAnswer(): string {
    return this._badAnswer;
  }
  public set badAnswer(v: string) {
    this._badAnswer = v;
  }


  private _neutralAnswer: string;
  public get neutralAnswer(): string {
    return this._neutralAnswer;
  }
  public set neutralAnswer(v: string) {
    this._neutralAnswer = v;
  }


  private _goodAnswer: string;
  public get goodAnswer(): string {
    return this._goodAnswer;
  }
  public set goodAnswer(v: string) {
    this._goodAnswer = v;
  }


  private _excellentAnswer: string;
  public get excellentAnswer(): string {
    return this._excellentAnswer;
  }
  public set excellentAnswer(v: string) {
    this._excellentAnswer = v;
  }
  
   

  public  AllAnswers: string[];
   
  private _Comment : string;
  public get Comment() : string {
    return this._Comment;
  }
  public set Comment(v : string) {
    this._Comment = v;
  }
  
  


}

