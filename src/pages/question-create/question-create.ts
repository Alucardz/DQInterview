import { CategoriesProvider } from './../../providers/categories';
import { Logger } from './../../utils/Logger/ILogger';
import { Api } from './../../providers/api';
import { QuestionCategory } from './../../models/questionCategory';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Question } from './../../models/question';
import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, IonicPage } from 'ionic-angular';

/**
 * Generated class for the QuestionCreatePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-question-create',
  templateUrl: 'question-create.html',
})
export class QuestionCreatePage {
  q: Question;
  form: FormGroup;
  isReadyToSave: boolean;

  categories: QuestionCategory[];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public viewCtrl: ViewController,
    public api: Api,
    public categService: CategoriesProvider,
    public toastCtrl: Logger
  ) {
    this.form = formBuilder.group({
      questionText: ['', Validators.required],
      badAnswer: ['', Validators.required],
      neutralAnswer: ['', Validators.required],
      goodAnswer: ['', Validators.required],
      excellentAnswer: ['', Validators.required],
      CategoryId: ['', Validators.required]
    });

    // Watch the form for changes, and
    this.form.valueChanges.subscribe((v) => {
      this.isReadyToSave = this.form.valid;
    });

    this.categService.query().then(data => { this.categories = data; },
      err => this.toastCtrl.error(err));
  }

  createQuestion() {

  }

  /**
 * The user cancelled, so we dismiss without sending data back.
 */
  cancel() {
    this.viewCtrl.dismiss();
  }

  done() {
    if (!this.form.valid) { return; }
    this.viewCtrl.dismiss(this.form.value);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionCreatePage');
  }

}
