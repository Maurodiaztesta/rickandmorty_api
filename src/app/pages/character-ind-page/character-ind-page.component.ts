import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/shared/services/characters.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-character-ind-page',
  templateUrl: './character-ind-page.component.html',
  styleUrls: ['./character-ind-page.component.scss']
})
export class CharacterIndPageComponent implements OnInit{
  
  id: any;

  character: any;
  

  constructor(private charactersService: CharactersService, private route: ActivatedRoute){

  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.charactersService.getCharacterInd(id).subscribe((res: any) => {
      this.character = res
  });
}
}
