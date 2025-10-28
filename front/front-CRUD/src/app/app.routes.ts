import { Routes } from '@angular/router';
import { AutorComponent } from './modules/autor/autor-component/autor-component';

export const routes: Routes = [
    {
        path : "",
        component : AutorComponent
    },
    {
        path: "*",
        redirectTo : ""
    }
];
