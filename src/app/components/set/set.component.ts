import { Component, OnInit } from '@angular/core';
import { ObjectUnsubscribedError } from 'rxjs';
import {FlashcardService} from '../../services/flashcard.service'

@Component({
  selector: 'sets',
  templateUrl: './set.component.html',
  styleUrls: ['./set.component.css']
})
export class SetComponent implements OnInit {

  sets :any = [];

  constructor(private flashcardService: FlashcardService) { }

  getSets(): void {
    this.flashcardService.getFlashcardSets().subscribe((data: any) => {
      console.log("getting set data");
      console.log(data);
      this.sets = data;
      }
    )
  }

  ngOnInit(): void {
    this.getSets();
}};
