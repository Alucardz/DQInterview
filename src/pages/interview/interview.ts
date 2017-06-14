import { JobTitle } from './../../models/jobTitle';
import { jobTitlesProvider } from './../../providers/jobTitles';
import { Answer } from './../../models/answer';
import { InterviewsProvider } from './../../providers/interviews';
import { Interview } from './../../models/interview';
import { Question } from './../../models/question';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

/**
 * Generated class for the InterviewPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-interview',
  templateUrl: 'interview.html'
})
export class InterviewPage {
  questionList: Question[] = [];
  answerList: Answer[] = [];
  jobTitles: JobTitle[] = [];

  private _selectedJobtitle: string;
  public get selectedJobtitle(): string {
    return this._selectedJobtitle;
  }
  public set selectedJobtitle(v: string) {
    debugger;
    this._selectedJobtitle = v;

    let loading = this.loadingCtrl.create({
      content: 'Loading Questions...'
    });
    loading.present();
    //todo: replace 1 with jobOpening (from combo?)
    this.InterviewService.GetQuestions(1).then(data => {
      this.questionList = data;
      if (this.questionList.length > 0) {
        debugger
        this.questionList.forEach(q => {
          this.answerList.push(new Answer({}));
        });
        loading.dismiss();
      }
    });
  }

  InterviewObj: Interview;

  @ViewChild('slides') slides;
  //@ViewChildren('AnswersContainer')
  //private AnswersComp: QueryList<InterviewAnswerComponent>;


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public InterviewService: InterviewsProvider,
    public JobTitlesService: jobTitlesProvider,
    public loadingCtrl: LoadingController) {

    let loading = this.loadingCtrl.create({
      content: 'Loading Please Wait...'
    });

    loading.present();
    JobTitlesService.query().then(jobTitles => {
      this.jobTitles = jobTitles;
      loading.dismiss();
    })
  }

  ionViewDidLoad() {

  }

  beforeNextSlide(args: any) {
    debugger;
    return false;
  }

  

  ngAfterViewInit() {
    debugger;
    // this.slides.paginationBulletRender = (index, defaultClass) => {
    //   return '<span class="' + defaultClass + '"></span>';
    // }
  }

}
