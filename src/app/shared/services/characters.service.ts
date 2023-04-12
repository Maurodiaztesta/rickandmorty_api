import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }

  getCharacters(page: number){
    return this.http.get(`https://rickandmortyapi.com/api/character?page=${page}`);
  }

  getCharacterInd(id: string | null){
    return this.http.get(`https://rickandmortyapi.com/api/character/${id}`)
  }

  searchCharacter(name: any){
    return this.http.get(`https://rickandmortyapi.com/api/character?name=${name}`)
  }
}
