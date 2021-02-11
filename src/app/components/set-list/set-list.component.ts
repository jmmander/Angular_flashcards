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
  sets_data;

  getSetInfo() :void{
    this.flashcardService.getFlashcardSets().subscribe((data: any) => {
      this.sets_data = data;
      for (let set of this.sets_data) {
        const id = set['id'];
        const set_name = set['set_name'];
        const no_fc = set['flashcards'].length;
        this.sets_info.push({id: id, name: set_name, no_fc: no_fc})
      }
    console.log(this.sets_info)});
  }
  

  ngOnInit(): void {
    this.getSetInfo()
  }

}
