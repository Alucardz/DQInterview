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
 *  [@answerState]="(answerIndex == selectedAnswer?.AnswerIndex?'active':'inactive')"
 */
@Component({
  selector: 'interview-answer',
  template: `
      <button class="round-button"  ion-item (click)="toggleComment(comment)" style="width: 98%">
        <ion-icon [name]="icons[answerIndex]" item-left ></ion-icon>
          {{answerText}}
      </button>
      <ion-item style="width: 98%" [@commentState]="(answerIndex == selectedAnswer?.AnswerIndex?'active':'inactive')" *ngIf="(answerIndex == selectedAnswer?.AnswerIndex)" > 
        <ion-textarea  #comment type="text" (ngModelChange)="selectedAnswer.Comment = $event" [ngModel]="selectedAnswer?.Comment" clearInput></ion-textarea>
      </ion-item>
  `, animations: [
    trigger('answerState', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(.95)',
        'border-radius': '30px 30px 30px 30px'
      })),
      state('active', style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1)',
        'font-size': '1.8em',
        'border-radius': '30px 30px 0px 0px',
        'box-shadow': '10px -10px 10px #888888',
        'margin-top': '20px'
      })),
      transition('inactive <=> active', animate('500ms ease-out'))
    ]),
    trigger('commentState', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(.95)',
        'border-radius': '30px 30px 30px 30px',
        'height':'0px'
      })),
      state('active', style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1)',
        'font-size': '2em',
        'border-radius': '0px 0px 30px 30px',
        'box-shadow': '10px -10px 10px #888888',
        'margin-right': '20px',
        'z-index': '-1'
      })),
      transition('inactive <=> active', animate('500ms ease-out')),
      transition('inactive <=> active', [
        style({ height: '*' }),
        animate(250, style({ height: 0 }))
      ])
    ])
  ]
})
//<!-- <!--   --> -->
export class InterviewAnswerComponent {
  @Input() answerIndex: number = 0;
  @Input() answerText: string;
  @Input() selectedAnswer: Answer;
  @Output() commentChange: EventEmitter<String> = new EventEmitter<String>();

  animationState: string = 'inactive';

  icons: string[] = ['thumbs-down', 'thumbs-up', 'happy', 'ribbon']
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

  ngOnInit() {
    
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
    // setTimeout(() => {
    //   this.animationState = (this.answerIndex == this.selectedAnswer.AnswerIndex?'active':'inactive')
    // }, 1000);  
    //
  }
}
