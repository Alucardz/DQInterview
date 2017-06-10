import { TextInput } from 'ionic-angular';
import { Answer } from './../../../models/answer';
import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, ViewChildren, QueryList, ViewContainerRef } from '@angular/core';

/**
 * Generated class for the InterviewAnswerComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'interview-answer',
  template: `
    <button ion-item (click)="toggleComment()">
      <ion-icon name="cart" item-left ></ion-icon>
        {{answerText}}
      </button>
      <ion-item *ngIf="answerIndex == selectedAnswer?.AnswerIndex">
        <ion-input #comment type="text" (ngModelChange)="selectedAnswer.Comment = $event" [ngModel]="selectedAnswer?.Comment"></ion-input>
      </ion-item>
  `
})
export class InterviewAnswerComponent {
  @Input() answerIndex: number;
  @Input() answerText: string;
  @Input() selectedAnswer: Answer;
  @Output() commentChange: EventEmitter<String> = new EventEmitter<String>();

  Txt_Comment: ElementRef;

  @ViewChildren('comment', { read: ElementRef }) set content(comments: QueryList<ElementRef>) {
    debugger;
    if (comments.length > 0) {      
      comments.first.nativeElement.querySelector('input').focus();      
    }
  }

  constructor() {

  }

  ngAfterViewInit() {

  }

  toggleComment() {
    if (this.selectedAnswer.AnswerIndex != this.answerIndex) {
      this.selectedAnswer.Comment = "";
      this.selectedAnswer.AnswerIndex = this.answerIndex;
      //this.Txt_Comment[this.selectedAnswer.AnswerIndex].nativeElement.focus()
    }
  }
}
