import { Answer } from './../../../models/answer';
import { Component, Input, Output, EventEmitter, ElementRef, ViewChildren, QueryList } from '@angular/core';

/**
 * Generated class for the InterviewAnswerComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'interview-answer',
  template: `
    <button ion-item (click)="toggleComment(comment)">
      <ion-icon name="cart" item-left ></ion-icon>
        {{answerText}}
    </button>
    <ion-item *ngIf="answerIndex == selectedAnswer?.AnswerIndex" >
      <ion-textarea #comment type="text" (ngModelChange)="selectedAnswer.Comment = $event" [ngModel]="selectedAnswer?.Comment" clearInput></ion-textarea>
    </ion-item>
  `
})
export class InterviewAnswerComponent {
  @Input() answerIndex: number;
  @Input() answerText: string;
  @Input() selectedAnswer: Answer;
  @Output() commentChange: EventEmitter<String> = new EventEmitter<String>();

  Txt_Comment: ElementRef;

  //
  @ViewChildren('comment', { read: ElementRef }) set content(comments: QueryList<ElementRef>) {
    if (comments.length > 0) {
      this.Txt_Comment = comments.first;
      this.Txt_Comment.nativeElement.querySelector('textarea').focus();
    }
  }

  constructor() {

  }

  toggleComment(commentInput: ElementRef) {
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
