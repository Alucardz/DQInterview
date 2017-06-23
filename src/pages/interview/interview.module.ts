import { UserService } from './../../mocks/providers/user.service';
import { jobTitlesProvider } from './../../providers/jobTitles';
import { InterviewAnswerComponent } from './components/interview-answer';
import { InterviewService } from './../../providers/interview.service';
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
  providers: [UserService, InterviewService, jobTitlesProvider]
})
export class InterviewPageModule {}
