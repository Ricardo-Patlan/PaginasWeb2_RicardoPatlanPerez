//Aqui se importan los modulos de angular que se van a utilizar en el proyecto
import { Routes } from '@angular/router';
import { HeroPageComponent } from './pages/hero/hero-page.component';

export const routes: Routes = [
  { path: 'hero', component: HeroPageComponent },
];
