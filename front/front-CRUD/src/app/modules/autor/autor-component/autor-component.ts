import { Component, inject, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { AutorService } from '../../../api/biblioteca-api/autor.service';
import { Autor } from '../interface/autor.interface';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-autor-component',
  imports: [TableModule, RouterLink],
  templateUrl: './autor-component.html',
  styleUrl: './autor-component.css',
})
export class AutorComponent implements OnInit {

      autores :Autor[] = [];


      ngOnInit(): void {
        this.listarAutores();
      }
      
      autorService = inject(AutorService);

      listarAutores(): void {
        this.autorService.getAutores().subscribe({
          next : (data) => {
            console.log("RESPUESTA DEL GETAUTORES",data)
            this.autores = data;
          },
          error : (error) => {
            console.log("Hubo un error al traer los autores", error);
          },
          complete : () => {
            console.log("Exito al traer autores");
          }
        });
      }
}
