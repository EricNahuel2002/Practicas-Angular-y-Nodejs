import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PianoComponent } from '../piano/piano.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PianoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('angular-project-clase4');
}

