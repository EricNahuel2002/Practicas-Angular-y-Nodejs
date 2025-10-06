import { HttpClient } from '@angular/common/http';
import { inject,Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { map, Observable } from 'rxjs';
import { GetLocations, Location } from '../../../modules/locations/interfaces/location.interface';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  

  private httpClient = inject(HttpClient);

  getLocations(): Observable<Location[]>{
    return this.httpClient.get<GetLocations>(`${environment.API_URL}/location`)
    .pipe(map((response:GetLocations) => response.results));
  }

}
