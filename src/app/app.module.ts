import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlashcardComponent } from './components/flashcard/flashcard.component';
import { FlashcardListComponent } from './components/flashcard-list/flashcard-list.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';  
import { BackendService } from './services/backend.service';
import { HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SetComponent } from './components/set/set.component'; 


@NgModule({
  declarations: [
    AppComponent,
    FlashcardComponent,
    FlashcardListComponent,
    HomepageComponent,
    SetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(BackendService),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
