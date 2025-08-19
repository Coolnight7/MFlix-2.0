import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { MovieListComponent } from './components/movielist/movielist';
import { MovieCreateComponent } from './components/movie-create/movie-create';
import { MovieDetailsComponent } from './components/movie-details/movie-details';
import { Welcome } from './components/welcome/welcome';

export const routes: Routes = [

  { path: '', component: Welcome },
  { path: 'movies', component: MovieListComponent },
  { path: 'movies/create', component: MovieCreateComponent },
  { path: 'movies/edit/:id', component: MovieCreateComponent },
  { path: 'movies/details/:id', component: MovieDetailsComponent },
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: '**', redirectTo: '/movies' }
];