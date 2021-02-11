import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class FlashcardService {

  api_url: string = "/api/flashcard_sets";

  constructor(private http: HttpClient) { }

  getFlashcardSets() {
    return this.http.get('/api/flashcard_sets')
  }

  getSet(id: number) {
    return this.http.get(`/api/flashcard_sets/${id}`)
  }


}
