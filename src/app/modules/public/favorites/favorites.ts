import { Component, OnInit, signal } from '@angular/core';
import { Character } from '../../characters/interfaces/character.interface';
import { TableModule } from 'primeng/table';
import { Tab } from 'primeng/tabs';

@Component({
  selector: 'app-favorites',
  imports: [TableModule],
  templateUrl: './favorites.html',
  styleUrl: './favorites.css'
})
export class Favorites implements OnInit {

  favoritos = signal<Character[]>([]);

  ngOnInit(): void {
    this.listarFavoritos();
  }

  listarFavoritos(){
    this.favoritos.set(JSON.parse(localStorage.getItem('favCharacters') || '[]'));
  }
}
