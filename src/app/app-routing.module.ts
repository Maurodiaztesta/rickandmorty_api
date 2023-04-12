import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FormularyPageComponent } from './pages/formulary-page/formulary-page.component';
import { CharacterIndPageComponent } from './pages/character-ind-page/character-ind-page.component';

const routes: Routes = [
  {
    path: "", component: HomePageComponent
  },
  {
    path: "characters", component: CharactersPageComponent
  },
  {
    path: "characters/:id", component: CharacterIndPageComponent
  },
  {
    path: "formulary", component: FormularyPageComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
