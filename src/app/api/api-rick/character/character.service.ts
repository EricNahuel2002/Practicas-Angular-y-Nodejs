import { Injectable,inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment.development';
import { Observable } from 'rxjs';
import { Character, GetCharacter } from '../../../modules/characters/interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  

  private httpClient = inject(HttpClient);



  getCharacters():Observable<Character[]>{
    return this.httpClient.get<GetCharacter>(`${environment.API_URL}/character`)
    .pipe(
      map((char : GetCharacter) => {
        return char.results;
      })
    );
  }

  GetCharacterById(id:number):Observable<Character>{
    return this.httpClient.get<Character>(`${environment.API_URL}/character/${id}`)
    .pipe(
      map((char : Character) => {
        return char;
      }
    )
  )
  }

}
