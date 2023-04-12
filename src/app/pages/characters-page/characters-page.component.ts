import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/shared/services/characters.service';

@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.component.html',
  styleUrls: ['./characters-page.component.scss']
})
export class CharactersPageComponent implements OnInit{
  
  

  constructor(private charactersService: CharactersService){}

  characters: any;
  pagina: number = 1;
  id: any = 1;
  nameSon: any;

  ngOnInit(): void {
    this.setPage(1);
  }

  setPage(page: number){
    this.pagina = page;
    this.charactersService.getCharacters(this.pagina).subscribe((res: any) => {
      this.characters = res.results

    });
  }

  buscado(name: any){
    this.nameSon = name;
    this.charactersService.searchCharacter(this.nameSon).subscribe((res: any) => {
      this.characters = res.results

    });
    
  }
}
