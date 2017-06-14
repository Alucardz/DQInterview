import { jobTitlesProvider } from './../../providers/jobTitles';
import { InterviewAnswerComponent } from './components/interview-answer';
import { InterviewsProvider } from './../../providers/interviews';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InterviewPage } from './interview';
//

@NgModule({
  declarations: [
    InterviewPage,
    InterviewAnswerComponent
  ],
  imports: [
    IonicPageModule.forChild(InterviewPage)//,
    //BrowserAnimationsModule
  ],
  exports: [
    InterviewPage
  ],
  providers: [InterviewsProvider, jobTitlesProvider]
})
export class InterviewPageModule {}
