import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../../../api/api-rick/character/character.service';
import {inject} from '@angular/core';
import { TableModule } from 'primeng/table';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-list-characters',
  imports: [TableModule],
  templateUrl: './list-characters.html',
  styleUrl: './list-characters.css'
})
export class ListCharacters implements OnInit {

  character : Character[] = [];

  characterService = inject(CharacterService);

  ngOnInit(): void {
    this.ListCharacters();
  }


  ListCharacters(){
    this.characterService.getCharacters().subscribe({
      next : (data) => {
        this.character = data;
      },
      error : (error) => {
        console.log(error);
      },
      complete : () => {
        console.log('completado');
      }
    })
  }
}
