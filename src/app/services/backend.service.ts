import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class BackendService implements InMemoryDbService{

  constructor() { }
  createDb(){

   let flashcard_sets =  [
      {
        set_name: 'set1',     flashcards: [
      {  id:  1,  question:  'Q1', answer: 'A1' },
      {  id:  2,  question:  'Q2', answer: 'A2' },
      {  id:  3,  question:  'Q3', answer: 'A3' },
      {  id:  4,  question:  'Q4', answer: 'A4' }]
    },
    
     {
      set_name: 'set2', 
     flashcards: [
      {  id:  1,  question:  'S2Q1', answer: 'S2A1' },
      {  id:  2,  question:  'S2Q2', answer: 'S2A2' },
      {  id:  3,  question:  'S2Q3', answer: 'S2A3' },
      {  id:  4,  question:  'S2Q4', answer: 'S2A4' }]}
    
    ];
 

   return {flashcard_sets};

  }
}
