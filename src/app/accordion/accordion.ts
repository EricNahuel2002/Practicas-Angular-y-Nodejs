import { Component } from '@angular/core';

@Component({
  selector: 'app-accordion',
  imports: [],
  templateUrl: './accordion.html',
  styleUrl: './accordion.css'
})
export class Accordion {
  abierto: boolean = false;

  toggle() {
    this.abierto = !this.abierto;
  }
}
