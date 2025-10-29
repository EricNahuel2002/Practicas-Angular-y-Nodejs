import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Autor } from '../../modules/autor/interface/autor.interface';
import { environment } from '../../../environments/environment.development';
import { AutorMapper } from './autor.mapper';
import { AutorRest } from './autor.interface.rest';

@Injectable({
  providedIn: 'root'
})
export class AutorService {
  
  httpclient = inject(HttpClient)


  getAutores():Observable<Autor[]>{
    return this.httpclient.get<AutorRest[]>(`${environment.BIBLIOTECA_URL}/autor/all`).pipe(
      map((res) => {
        return AutorMapper.mapRestAutorArrayToAutorArray(res);
      })
    );
  }


  createAutor(autor:Autor){
    return this.httpclient.post(`${environment.BIBLIOTECA_URL}/autor/add`,autor);
  }
}
