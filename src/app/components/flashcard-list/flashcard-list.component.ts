import { Component, Input, OnInit } from '@angular/core';
import { FlashcardService } from '../../services/flashcard.service';

@Component({
  selector: 'flashcard-list',
  templateUrl: './flashcard-list.component.html',
  styleUrls: ['./flashcard-list.component.css']
})
export class FlashcardListComponent implements OnInit {
  
  @Input() flashcards: any;

  constructor(private flashcardService: FlashcardService) { }

  ngOnInit(): void {
  }

}
