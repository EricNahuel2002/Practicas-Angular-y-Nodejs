import { Component,Input } from '@angular/core';

@Component({
  selector: 'card-component',
  imports: [],
  templateUrl: './card-component.html',
  styleUrl: './card-component.css'
})
export class CardComponent {


    @Input() nombreColor!: string;
}
