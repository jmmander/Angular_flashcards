import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.css']
})
export class FlashcardComponent implements OnInit {

  @Input() flashcard :any;

  constructor() { }

  ngOnInit(): void {
    console.log("flashcard:")
    console.log(this.flashcard)
  }

}
