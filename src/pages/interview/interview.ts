import { Interview } from './../../models/interview';
import { Question } from './../../models/question';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuestionsProvider } from "../../providers/questions";

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
  currQ: Question;

  InterviewObj: Interview;

  commentStates: boolean[][] = [];


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public questService: QuestionsProvider, ) {

    this.commentStates[0] = [false, false, false, false];

    questService.query().then(data => {
      this.questionList = data;
      if (this.questionList.length > 0) {
        this.currQ = this.questionList[0];

        this.questionList.forEach((q, i) => {
          this.commentStates[i] = [false, false, false, false];
        });
      }
    }
    );

    console.log('CONSTRUCTOR InterviewPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InterviewPage');
  }

  toggleComment(commentIndex: number) {
    //this.commentStates.every( arr => arr[this.currentQuestionIndex] = false);
    this.commentStates[this.currentQuestionIndex] = [false, false, false, false];
    this.commentStates[this.currentQuestionIndex][commentIndex] = !this.commentStates[this.currentQuestionIndex][commentIndex];
  }

  Next() {
    this.currentQuestionIndex += 1;
    this.currQ = this.questionList[this.currentQuestionIndex];
  }

  Prev() {
    this.currentQuestionIndex -= 1;
    this.currQ = this.questionList[this.currentQuestionIndex];
  }

}
