import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AutorService } from '../../../api/biblioteca-api/autor.service';
import { ReactiveFormsModule } from '@angular/forms';
import { InputText } from "primeng/inputtext";
import { Button } from "primeng/button";
import { Autor } from '../interface/autor.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-autor-component',
  imports: [ReactiveFormsModule, InputText, Button],
  templateUrl: './create-autor-component.html',
  styleUrl: './create-autor-component.css',
})
export class CreateAutorComponent implements OnInit {
  
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private autorService = inject(AutorService);
  
  form!: import('@angular/forms').FormGroup;
  
  ngOnInit(): void {
    this.form = this.fb.group(
      {
        Nombre : ["",[Validators.required]],
        Pais : ["",[Validators.required]]
      }
    )
  }


  createAutor(){

    const autor:Autor = {
      Nombre : this.form.get('Nombre')?.value,
      Pais : this.form.get('Pais')?.value
    }

    this.autorService.createAutor(autor).subscribe({
      next : (data) => {
        console.log("Autor creado",data)
      },
      error : (data) => {
        console.log("Error al crear el empleado",data)
      },
      complete : () => {
        this.router.navigate(['/'])
      }
    })
  }

}
