import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class FlashcardService {

  api_url: string = "/api/";

  constructor(private http: HttpClient) { }

  getFlashcardSets() {
    return this.http.get(this.api_url + "flashcard_sets")
  }

  getFlashcard(id) {
    return this.http.get(`${this.api_url + "flashcards"}/${id}`)
  }
}
