import { CategoriesProvider } from './../../providers/categories';
import { QuestionCreatePage } from './../question-create/question-create';
import { QuestionDetailsPage } from './../question-details/question-details';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuestionsPage } from './questions';

@NgModule({
  declarations: [
    QuestionsPage,
    QuestionDetailsPage,
    QuestionCreatePage
  ],
  imports: [
    IonicPageModule.forChild(QuestionsPage),
  ],
  exports: [
    QuestionsPage,
    QuestionDetailsPage,
    QuestionCreatePage
  ],
  entryComponents: [
    QuestionDetailsPage,
    QuestionCreatePage
  ],
  providers: [
    CategoriesProvider
  ]
})
export class QuestionsPageModule {}
