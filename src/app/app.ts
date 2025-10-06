import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import {Navbar} from './modules/public/navbar/navbar';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ButtonModule,RouterOutlet,Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('angular-project-clase4');
  
}

