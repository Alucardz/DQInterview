import { Logger } from './../../utils/Logger/ILogger';
import { QuestionsProvider } from './../../providers/questions';
import { Question } from './../../models/question';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the QuestionDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-question-details',
  templateUrl: 'question-details.html',
})
export class QuestionDetailsPage {
  q: Question;

  constructor(public navCtrl: NavController, public navParams: NavParams, public questionService: QuestionsProvider, public toastCtrl: Logger) {
    this.q = navParams.get('q');
  }

  UpdateQuestion(q: Question) {
    this.questionService.UpdateQuestion(q).subscribe(data => {
      this.toastCtrl.info();
    }, err => {
      this.toastCtrl.error(err);
    });
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionDetailsPage');
  }

}
