import { Routes } from '@angular/router';
import { ListCharacters } from './modules/characters/pages/list-characters/list-characters';
import { ListLocations } from './modules/locations/pages/list-locations/list-locations';
import { ListEpisodes } from './modules/episodes/pages/list-episodes/list-episodes';
import { DetailCharacter } from './modules/characters/pages/detail-character/detail-character';

export const routes: Routes = [

    {
        path: '',
        component: ListCharacters
    },
    {
        path : 'locations',
        component : ListLocations
    },
    {
        path : 'episodes',
        component : ListEpisodes
    },
    {
        path: 'characters/:id',
        component : DetailCharacter
    },
    {
        path: '**',
        redirectTo: ''
    }

];
