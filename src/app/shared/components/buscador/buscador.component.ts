import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit{
  
  name: any;

  @Output() emitNameOut = new EventEmitter();

  constructor(private charactersService: CharactersService){}

  ngOnInit(): void {
    
}

  buscar(){
    this.emitNameOut.emit(this.name);
  }
}
