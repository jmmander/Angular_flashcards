import { Component, OnInit } from '@angular/core';
import { ObjectUnsubscribedError } from 'rxjs';
import {FlashcardService} from '../../services/flashcard.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sets',
  templateUrl: './set.component.html',
  styleUrls: ['./set.component.css']
})
export class SetComponent implements OnInit {

  set_id: any; 

  set;


  constructor(private activatedRoute: ActivatedRoute, private flashcardService: FlashcardService) { }

  getSetId(): void {
    this.activatedRoute.paramMap.subscribe(params => { 
      console.log("getting set")
      this.set_id = params.get('id'); 
      this.getSetById(this.set_id);
  });
      }

  getSetById(id): void {
    this.set = this.flashcardService.getSet(this.set_id).subscribe((data) => {
      console.log("SET DATA");
      console.log(data);
      this.set = data;
    });
   ;
  }
    
  

  ngOnInit(): void {
    this.set_id = this.getSetId();
    console.log(this.set_id)
    
  
}};
