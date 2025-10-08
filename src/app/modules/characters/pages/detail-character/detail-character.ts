import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterService } from '../../../../api/api-rick/character/character.service';
import { Character } from '../../interfaces/character.interface';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-detail-character',
  imports: [TableModule],
  templateUrl: './detail-character.html',
  styleUrl: './detail-character.css'
})
export class DetailCharacter implements OnInit {
  
  router = inject(ActivatedRoute);
  characterService = inject(CharacterService);

  character?: Character;

  ngOnInit(): void {
    var id = Number(this.router.snapshot.paramMap.get('id'));
    this.characterService.GetCharacterById(id).subscribe({
      next : (data) => {
        this.character = data;
      },
      error : (error) => {
        console.log(error);
      },
      complete : () => {
        console.log('detalle del character traido');
      }
    })
  }



}
