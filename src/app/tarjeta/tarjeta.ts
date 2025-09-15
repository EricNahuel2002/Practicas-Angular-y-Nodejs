import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  imports: [],
  templateUrl: './tarjeta.html',
  styleUrl: './tarjeta.css'
})
export class Tarjeta {
  @Input() titulo!: string;
  @Input() subtitulo!: string;
  @Input() icono!: string;
}
