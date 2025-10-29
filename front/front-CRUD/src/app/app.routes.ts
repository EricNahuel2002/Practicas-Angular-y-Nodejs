import { Routes } from '@angular/router';
import { AutorComponent } from './modules/autor/autor-component/autor-component';
import { CreateAutorComponent } from './modules/autor/create-autor-component/create-autor-component';

export const routes: Routes = [
    {
        path : "",
        component : AutorComponent
    },

    {
        path : "create",
        component : CreateAutorComponent
    },

    {
        path: "*",
        redirectTo : ""
    }
];
