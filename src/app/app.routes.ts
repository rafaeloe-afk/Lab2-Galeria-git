import { Routes } from '@angular/router';
import { Galeria } from './galeria/galeria';

export const routes: Routes = [
    { path: '', component: Galeria },
    { path: '**', redirectTo: '' }
]; 

