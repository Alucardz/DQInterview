import { Answer } from './../../models/answer';
import { InterviewAnswerComponent } from './components/interview-answer';
import { InterviewsProvider } from './../../providers/interviews';
import { Interview } from './../../models/interview';
import { Question } from './../../models/question';
import { Component, ViewChildren, QueryList } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InterviewPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-interview',
  templateUrl: 'interview.html',
})
export class InterviewPage {

  currentQuestionIndex: number = 0;
  questionList: Question[];
  answerList: Answer[] = [];
  currQ: Question;
  currA: Answer = new Answer({});

  answerToggleStates: boolean[] = [];

  InterviewObj: Interview;

  //@ViewChildren('AnswersContainer')
  //private AnswersComp: QueryList<InterviewAnswerComponent>;


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public InterviewService: InterviewsProvider) {

    //todo: replace 1 with jobOpening (from combo?)
    InterviewService.GetQuestions(1).then(data => {
      this.questionList = data;
      if (this.questionList.length > 0) {
        this.currQ = new Question(this.questionList[0]);
        debugger
        this.questionList.forEach(q => {
          this.answerList.push(new Answer({}));
        });
      }
    }
    );
  } 
  onCommentChange(comment) {
    debugger;
    console.log(comment);
    this.answerList[this.currentQuestionIndex].Comment = comment;
  }
  ionViewDidLoad() {

  }

  ngAfterViewInit() {
    debugger;
    // this.AnswersComp.changes.subscribe((changes: any) => {
    //   changes._results.forEach((childView: InterviewAnswerComponent) => {
    //     // childView.onToggled.subscribe(newToggleState => {
    //     //   debugger;
    //     //   if (newToggleState) {
    //     //     this.currA = new Answer({
    //     //       AnswerIndex: childView.answerIndex
    //     //     });
    //     //     this.answerList[this.currentQuestionIndex] = this.currA;
    //     //     this.AnswersComp.forEach((childView) => {
    //     //       if (childView.answerIndex != this.currA.AnswerIndex) {
    //     //         childView.toggleState.next(false);
    //     //       }
    //     //     })
    //     //   }
    //     // });
    //   });
    // })
  }

  Next() {
    this.currentQuestionIndex += 1;
    this.currQ = this.questionList[this.currentQuestionIndex];
    //this.currA = this.answerList[this.currentQuestionIndex];
  }

  Prev() {
    this.currentQuestionIndex -= 1;
    this.currQ = this.questionList[this.currentQuestionIndex];
    //this.currA = this.answerList[this.currentQuestionIndex];
  }

}
