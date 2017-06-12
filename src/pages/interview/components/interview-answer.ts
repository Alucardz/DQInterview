import { Answer } from './../../../models/answer';
import { Component, Input, Output, EventEmitter, ElementRef, ViewChildren, QueryList, state, style, transition, animate, trigger } from '@angular/core';
// import { BehaviorSubject } from "rxjs/BehaviorSubject";
// import { Observable } from "rxjs/Rx";
// import 'rxjs/add/operator/combineLatest';
// import 'rxjs/add/observable/combineLatest';
/**
 * Generated class for the InterviewAnswerComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'interview-answer',
  template: `
      <button class="round-button" [@answerState]="(answerIndex == selectedAnswer?.AnswerIndex?'active':'inactive')" ion-item (click)="toggleComment(comment)">
        <ion-icon [name]="icons[answerIndex]" item-left ></ion-icon>
          {{answerText}}
      </button>
      <ion-item [@commentState]="(answerIndex == selectedAnswer?.AnswerIndex?'active':'inactive')" *ngIf="answerIndex == selectedAnswer?.AnswerIndex" >
        <ion-textarea  #comment type="text" (ngModelChange)="selectedAnswer.Comment = $event" [ngModel]="selectedAnswer?.Comment" clearInput></ion-textarea>
      </ion-item>
  `, animations: [
   trigger('answerState', [
     state('inactive', style({
       backgroundColor: '#eee',
       transform: 'scale(.95)',
       'border-radius': '30px 30px 30px 30px'
     })),
     state('active',   style({
       backgroundColor: '#cfd8dc',
       transform: 'scale(1)',
       'font-size': '2em',
       'border-radius': '30px 30px 0px 0px'
     })),
     transition('inactive <=> active', animate('500ms ease-out'))
   ]),
   trigger('commentState', [
     state('inactive', style({
       backgroundColor: '#eee',
       transform: 'scale(.95)',
       'border-radius': '30px 30px 30px 30px'
     })),
     state('active',   style({
       backgroundColor: '#cfd8dc',
       transform: 'scale(1)',
       'font-size': '2em',
       'border-radius': '0px 0px 30px 30px'       
     })),
     transition('inactive <=> active', animate('500ms ease-out'))
   ])
 ]
})
export class InterviewAnswerComponent {
  @Input() answerIndex:  number;
  @Input() answerText: string;
  @Input() selectedAnswer: Answer;
  @Output() commentChange: EventEmitter<String> = new EventEmitter<String>();

  // answerState: Observable<string> = Observable.combineLatest(this.answerText, this.selectedAnswer)
  // .map(values => (values[0] === values[1].AnswerIndex?'':''))
                   
                  
  icons: string[] = ['thumbs-down','thumbs-up','happy','ribbon']
  Txt_Comment: ElementRef;

  //
  @ViewChildren('comment', { read: ElementRef }) set content(comments: QueryList<ElementRef>) {
    if (comments.length > 0) {
      debugger;
      this.Txt_Comment = comments.first;
      this.Txt_Comment.nativeElement.querySelector('textarea').focus();
    }
  }

  constructor() {

  }

  toggleComment(commentInput: ElementRef) {
    debugger;
    if (this.selectedAnswer.AnswerIndex != this.answerIndex) {
      this.selectedAnswer.Comment = "";
      this.selectedAnswer.AnswerIndex = this.answerIndex;      
    }
    else {
      if (this.Txt_Comment) {
        this.Txt_Comment.nativeElement.querySelector('textarea').focus();
      }
    }
  }
}
