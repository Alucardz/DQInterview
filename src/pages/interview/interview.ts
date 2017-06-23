import { Observable } from 'rxjs/Rx';
import { JobTitle } from './../../models/jobTitle';
import { jobTitlesProvider } from './../../providers/jobTitles';
import { Answer } from './../../models/answer';
import { InterviewService } from './../../providers/interview.service';
import { Interview } from './../../models/interview';
import { Question } from './../../models/question';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';

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
  questionList$: Observable<Question[]>;
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

    //this.answerList$ = this.questionList$.switchMap(qList => );
    this.InterviewService.GetQuestions(1).subscribe((qList) => {
        qList.forEach(q => this.answerList.push(new Answer({})))
      }, err => {
        alert(err)
        }, () => {
        loading.dismiss()
    })
  }

  InterviewObj: Interview;

  @ViewChild('slides') slides;
  //@ViewChildren('AnswersContainer')
  //private AnswersComp: QueryList<InterviewAnswerComponent>;


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public InterviewService: InterviewService,
    public JobTitlesService: jobTitlesProvider,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController) {

    let loading = this.loadingCtrl.create({
      content: 'Loading Please Wait...'
    });

    loading.present();
    JobTitlesService.query().then(jobTitles => {
      this.jobTitles = jobTitles;
      loading.dismiss();
    })


  }

  log(q: Question) {
    console.log(q);
  }

  ngOnInit() {
    this.questionList$ = this.InterviewService.questions$;

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
