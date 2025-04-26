import {Component, OnDestroy, OnInit} from '@angular/core';
import {MoviesService} from '../movies.service';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {DecimalPipe} from '@angular/common';
import {MovieCardComponent} from '../all-movies/movie-card/movie-card.component';
import {Movie} from '../models/movie.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [
    MovieCardComponent,
    RouterLink,
    RouterLinkActive,
    DecimalPipe
  ],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent implements OnInit, OnDestroy {
  movies: Movie[] = [];
  isLoading = true;
  error = '';
  private subscription: Subscription | null = null;

  constructor(private _moviesService: MoviesService) { }

  ngOnInit() {
    this.isLoading = true;
    this.subscription = this._moviesService.getPopularMovies().subscribe({
      next: (data) => {
        this.movies = data.results;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Failed to load movies. Please try again later.';
        this.isLoading = false;
        console.error(err);
      }
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
