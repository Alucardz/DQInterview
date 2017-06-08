import { InterviewAnswerComponent } from './components/interview-answer';
import { InterviewsProvider } from './../../providers/interviews';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InterviewPage } from './interview';

@NgModule({
  declarations: [
    InterviewPage,
    InterviewAnswerComponent
  ],
  imports: [
    IonicPageModule.forChild(InterviewPage),
  ],
  exports: [
    InterviewPage
  ],
  providers: [InterviewsProvider]
})
export class InterviewPageModule {}
