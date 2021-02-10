import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlashcardListComponent } from './components/flashcard-list/flashcard-list.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SetListComponent } from './components/set-list/set-list.component';
import { SetComponent } from './components/set/set.component'


const routes: Routes = [{path: 'flashcards', component: FlashcardListComponent},
                        {path: 'sets', component: SetListComponent},
                        {path: 'home', component: HomepageComponent}
                        ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
