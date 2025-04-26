import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AllMoviesComponent} from './all-movies/all-movies.component';
import {MovieDetailsComponent} from './all-movies/movie-details/movie-details.component';
import {MoviesComponent} from './movies/movies.component';
import {PeopleComponent} from './people/people.component';
import {TVComponent} from './tv/tv.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'all',
    component: AllMoviesComponent,
  },
  { path: 'all/movie/:id/:type', component: MovieDetailsComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'people', component: PeopleComponent },
  { path: 'tv', component: TVComponent },
];
