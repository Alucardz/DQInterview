import { Logger } from './../../utils/Logger/ILogger';
import { QuestionCreatePage } from './../question-create/question-create';
import { QuestionDetailsPage } from './../question-details/question-details';
import { QuestionsProvider } from './../../providers/providers';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Question } from "../../models/question";

/**
 * Generated class for the QuestionsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-questions',
  templateUrl: 'questions.html',
})
export class QuestionsPage {
  currentQuestions: Question[];

  constructor(public navCtrl: NavController,
              public questions: QuestionsProvider,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              public toastCtrl: Logger
              ) {
    questions.query().then(data => {
      this.currentQuestions = data;
    });
  }

  openItem(q: Question) {
    this.navCtrl.push(QuestionDetailsPage, {
      q: q
    });
  }

  addQuestion() {
    let addModal = this.modalCtrl.create(QuestionCreatePage);
    addModal.onDidDismiss(item => {
      if (item) {
        this.questions.addQuestion(item).subscribe(
                       q  => this.currentQuestions.push(q),
                       error =>  this.toastCtrl.error(error));;
      }
    })
    addModal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionsPage');
  }

}
