import { UserService } from './../providers/user.service';
import { QuestionCreatePage } from './../pages/question-create/question-create';
import { QuestionDetailsPage } from './../pages/question-details/question-details';

//import { InterviewPageModule } from './../pages/interview/interview.module';
import { IonicToasterService } from './../utils/Logger/IonicToaster.log.service';
import { Logger } from './../utils/Logger/ILogger';
//import { QuestionsPageModule } from './../pages/questions/questions.module';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage, IonicStorageModule } from '@ionic/storage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { SettingsPage } from '../pages/settings/settings';
import { SignupPage } from '../pages/signup/signup';
import { TabsPage } from '../pages/tabs/tabs';
import { WelcomePage } from './../pages/welcome/welcome';

import { Api } from '../providers/api';
import { Items } from '../mocks/providers/items';
import { Settings } from '../providers/settings';

import { Camera } from '@ionic-native/camera';
import { GoogleMaps } from '@ionic-native/google-maps';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function provideSettings(storage: Storage) {
  /**
   * The Settings provider takes a set of default settings for your app.
   *
   * You can add new settings options at any time. Once the settings are saved,
   * these values will not overwrite the saved values (this can be done manually if desired).
   */
  return new Settings(storage, {
    option1: true,
    option2: 'Ionitron J. Framework',
    option3: '3',
    option4: 'Hello'
  });
}


/**
 * The Pages array lists all of the pages we want to use in our app.
 * We then take these pages and inject them into our NgModule so Angular
 * can find them. As you add and remove pages, make sure to keep this list up to date.
 */
let pages = [
  MyApp,
  LoginPage,
  SettingsPage,
  SignupPage,
  TabsPage,
  WelcomePage,
  QuestionDetailsPage,
  QuestionCreatePage
  //QuestionsPage
];

export function declarations() {
  return pages;
}

export function entryComponents() {
  return pages;
}

export function providers() {
  return [
    Api,
    Items,
    UserService,
    Camera,
    GoogleMaps,
    SplashScreen,
    StatusBar,
    { provide: Logger, useClass: IonicToasterService },
    { provide: Settings, useFactory: provideSettings, deps: [Storage] },
    // Keep this to enable Ionic's runtime error handling during development
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ];
}

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    SettingsPage,
    SignupPage,
    TabsPage,
    WelcomePage,
    QuestionDetailsPage,
    QuestionCreatePage
    //QuestionsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      }
    }),
    BrowserAnimationsModule,
    // QuestionsPageModule,
    // InterviewPageModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    SettingsPage,
    SignupPage,
    TabsPage,
    WelcomePage,
    QuestionDetailsPage,
    QuestionCreatePage
    //QuestionsPage
  ],
  providers: providers()
})
export class AppModule { }
