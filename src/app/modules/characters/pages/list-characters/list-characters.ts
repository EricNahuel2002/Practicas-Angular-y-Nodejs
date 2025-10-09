import { Component, computed, effect, OnInit, signal } from '@angular/core';
import { CharacterService } from '../../../../api/api-rick/character/character.service';
import {inject} from '@angular/core';
import { TableModule } from 'primeng/table';
import { Character } from '../../interfaces/character.interface';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { Select, SelectModule } from 'primeng/select';


@Component({
  selector: 'app-list-characters',
  imports: [TableModule,ButtonModule,InputTextModule,FormsModule,SelectModule],
  templateUrl: './list-characters.html',
  styleUrl: './list-characters.css'
})
export class ListCharacters implements OnInit {

  router = inject(Router);
  characterService = inject(CharacterService);

  opciones: Array<string> = ['Todos','Favoritos'];
  opcionElegida = signal('');


  characters = signal<Character[]>([]);
  characterBuscado = signal('');
  favCharacters = signal<Character[]>([]);
  

  charactersFiltrados = computed(() => {
    const listaOriginal = this.characters();
    const filtro = this.characterBuscado().toLowerCase();
    if(this.opcionElegida() === 'Favoritos'){
      return this.favCharacters();
    }
    if(!filtro){
      return listaOriginal;
    }
    return listaOriginal.filter(character => character.name.toLowerCase().includes(filtro));
  });




  favCharEffect = effect(() => {
    localStorage.setItem('favCharacters', JSON.stringify(this.favCharacters()));
  });




  ngOnInit(): void {
    this.ListCharacters();
  }

  ngOnDestroy(): void {
    this.favCharEffect.destroy();
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

  AgregarAFavoritos(character:Character){
    this.favCharacters.set([...this.favCharacters(),character]);
    alert(`Personaje ${character.name} agregado a favoritos`);
  }

}
