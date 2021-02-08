import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlashcardListComponent } from './components/flashcard-list/flashcard-list.component';
import { FlashcardComponent } from './components/flashcard/flashcard.component';


const routes: Routes = [{path: 'flashcards', component: FlashcardListComponent},
                        {path: 'flashcard/:id', component: FlashcardComponent}
                        ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
