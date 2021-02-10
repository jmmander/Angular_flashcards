import { Component, OnInit } from '@angular/core';
import {FlashcardService} from '../../services/flashcard.service'

@Component({
  selector: 'set-list',
  templateUrl: './set-list.component.html',
  styleUrls: ['./set-list.component.css']
})


export class SetListComponent implements OnInit {

  constructor(private flashcardService: FlashcardService) { 
  }

  sets_info :any[] = [];

  getSetInfo() :void{
    this.flashcardService.getFlashcardSets().subscribe((data: any) => {
      const sets_data = data;
      for (let set of sets_data) {
        const set_name = set['set_name'];
        const no_fc = set['flashcards'].length;
        this.sets_info.push({name: set_name, no_fc: no_fc})
      }
    console.log(this.sets_info)});
  }
  
  ngOnInit(): void {
    this.getSetInfo()
  }

}
