import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./navbar/navbar";
import { Tarjeta } from "./tarjeta/tarjeta";
import { Accordion } from "./accordion/accordion";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Tarjeta, Accordion],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('angular-project-clase4');
  
  cards : string[] = ['red','blue','yellow','purple','green','orange','pink','brown','black'];

  accordionItems = [
    { titulo: 'Sección 1', cuerpo: 'Contenido de la sección 1' },
    { titulo: 'Sección 2', cuerpo: 'Contenido de la sección 2' },
    { titulo: 'Sección 3', cuerpo: 'Contenido de la sección 3' }
  ];
}

