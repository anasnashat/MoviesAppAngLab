import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AllMoviesComponent} from './all-movies/all-movies.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'all', component:AllMoviesComponent}
];

