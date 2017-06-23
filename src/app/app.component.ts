import { User } from './../models/user.model';
import { UserService } from './../providers/user.service';
import { InterviewPage } from './../pages/interview/interview';
import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, Config } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FirstRunPage } from '../pages/pages';
import { QuestionsPage } from '../pages/questions/questions';
import { Settings } from '../providers/providers';
import { TranslateService } from '@ngx-translate/core'

// <ion-toolbar>
//   <ion-title>Pages</ion-title>
// </ion-toolbar>
@Component({
  template: `
  <ion-nav #content [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage: any = FirstRunPage;


  @ViewChild(Nav) nav: Nav;



  constructor(private translate: TranslateService, 
                      platform: Platform, 
                      settings: Settings, 
                      private config: Config, 
                      statusBar: StatusBar, 
                      splashScreen: SplashScreen,
                      userSvc: UserService) {

    
    
    this.initTranslate();

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }


  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('en');

    if (this.translate.getBrowserLang() !== undefined) {
      this.translate.use(this.translate.getBrowserLang());
    } else {
      this.translate.use('en'); // Set your language here
    }

    this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
      this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
    });
  }

  
}
