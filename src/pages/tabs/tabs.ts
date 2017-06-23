import { InterviewPage } from './../interview/interview';
import { QuestionsPage } from './../questions/questions';

import { User } from './../../models/user.model';
import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

import { Tab1Root } from '../pages';
import { Tab2Root } from '../pages';
import { Tab3Root } from '../pages';
import { UserService } from "../../providers/user.service";


@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = Tab1Root;
  tab2Root: any = Tab2Root;
  tab3Root: any = Tab3Root;

  tab1Title = " ";
  tab2Title = " ";
  tab3Title = " ";

  loggedInUser: User;

  pages: any[] = [
    { title: 'Questions', component: QuestionsPage },
    { title: 'Interview', component: InterviewPage }
  ]

  constructor(public navCtrl: NavController,
    public translateService: TranslateService,
    public userSvc: UserService) {

    userSvc.User.subscribe(u => this.loggedInUser = u);

    translateService.get(['TAB1_TITLE', 'TAB2_TITLE', 'TAB3_TITLE']).subscribe(values => {
      this.tab1Title = values['TAB1_TITLE'];
      this.tab2Title = values['TAB2_TITLE'];
      this.tab3Title = values['TAB3_TITLE'];
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.setRoot(page.component);
  }
}
