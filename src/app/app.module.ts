import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { FormularyPageComponent } from './pages/formulary-page/formulary-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PaginationComponent } from './shared/components/pagination/pagination.component';
import { CharacterIndPageComponent } from './pages/character-ind-page/character-ind-page.component';
import { BuscadorComponent } from './shared/components/buscador/buscador.component';
import { ChangeColorComponent } from './shared/components/change-color/change-color.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CharactersPageComponent,
    HeaderComponent,
    FooterComponent,
    FormularyPageComponent,
    PaginationComponent,
    CharacterIndPageComponent,
    BuscadorComponent,
    ChangeColorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
