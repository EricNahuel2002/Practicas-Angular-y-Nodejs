import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Autor } from '../../modules/autor/interface/autor.interface';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AutorService {
  
  httpclient = inject(HttpClient)


  getAutores():Observable<Autor[]>{
    return this.httpclient.get<Autor[]>(`${environment.BIBLIOTECA_URL}/autor/all`);
  }
}
