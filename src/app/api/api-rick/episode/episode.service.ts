import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { map, Observable } from 'rxjs';
import { Episode, GetEpisodes } from '../../../modules/episodes/interfaces/episode.interface';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  private httpClient = inject(HttpClient);

  getEpisodes(): Observable<Episode[]> {
    return this.httpClient.get<GetEpisodes>(`${environment.API_URL}/episode`)
    .pipe(map((res:GetEpisodes) => res.results));
  }
  
}
