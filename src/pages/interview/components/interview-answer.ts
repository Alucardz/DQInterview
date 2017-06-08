import { Answer } from './../../../models/answer';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Subject } from "rxjs/Subject";

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
        <ion-input type="text" (ngModelChange)="selectedAnswer.Comment = $event" [ngModel]="selectedAnswer?.Comment"></ion-input>
      </ion-item>
  `
})
export class InterviewAnswerComponent {
  @Input() answerIndex: number;
  @Input() answerText: string;
  @Input() selectedAnswer: Answer;
  @Output() commentChange: EventEmitter<String> = new EventEmitter<String>();
  constructor() {

  }

  toggleComment() {
    if (this.selectedAnswer.AnswerIndex != this.answerIndex) {
      this.selectedAnswer.Comment = "";
      this.selectedAnswer.AnswerIndex = this.answerIndex;
    }
  }
}
