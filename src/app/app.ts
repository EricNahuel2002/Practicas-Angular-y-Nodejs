import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './card-component/card-component';
import { Navbar } from "./navbar/navbar";
import { Tarjeta } from "./tarjeta/tarjeta";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CardComponent, Navbar, Tarjeta],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('angular-project-clase4');
  
  cards : string[] = ['red','blue','yellow','purple','green','orange','pink','brown','black'];
}

