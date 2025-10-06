import { Component, OnInit } from '@angular/core';
import { EpisodeService } from '../../../../api/api-rick/episode/episode.service';
import {inject} from "@angular/core";
import { Episode } from '../../interfaces/episode.interface';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-list-episodes',
  imports: [TableModule],
  templateUrl: './list-episodes.html',
  styleUrl: './list-episodes.css'
})
export class ListEpisodes implements OnInit {

  episodeService = inject(EpisodeService);

  episodes: Episode[] = [];

  ngOnInit(): void {
    this.listEpisodes();
  }


  listEpisodes(){
    this.episodeService.getEpisodes().subscribe({
      next: (data) => {
        this.episodes = data;
      },
      error: (error) => {
        console.error('Error fetching episodes:', error);
      },
      complete: () => {
        console.log("traidos los episodios")
      }

    })
  }
}
