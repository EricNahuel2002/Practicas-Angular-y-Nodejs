import { Component, computed, effect, OnInit, signal } from '@angular/core';
import { CharacterService } from '../../../../api/api-rick/character/character.service';
import {inject} from '@angular/core';
import { TableModule } from 'primeng/table';
import { Character } from '../../interfaces/character.interface';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-list-characters',
  imports: [TableModule,ButtonModule,InputTextModule,FormsModule],
  templateUrl: './list-characters.html',
  styleUrl: './list-characters.css'
})
export class ListCharacters implements OnInit {

  router = inject(Router);
  characterService = inject(CharacterService);


  characters = signal<Character[]>([]);
  characterBuscado = signal('');
  charactersFiltrados = computed(() => {
    const listaOriginal = this.characters();
    const filtro = this.characterBuscado().toLowerCase();
    if(!filtro){
      return listaOriginal;
    }
    return listaOriginal.filter(character => character.name.toLowerCase().includes(filtro));
  });

  ngOnInit(): void {
    this.ListCharacters();
  }


  ListCharacters(){
    this.characterService.getCharacters().subscribe({
      next : (data) => {
        this.characters.set(data);
      },
      error : (error) => {
        console.log(error);
      },
      complete : () => {
        console.log('completado');
      }
    })
  }


  verDetalle(id:number){
    this.router.navigate(['characters/',id]);
  }

  buscarCharacter(nombre:string){
    this.characterBuscado.set(nombre);
  }

}
