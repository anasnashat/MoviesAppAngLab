import {Component, OnDestroy, OnInit} from '@angular/core';
import {MoviesService} from '../movies.service';
import {MovieCardComponent} from './movie-card/movie-card.component';
import {Movie} from '../models/movie.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-all-movies',
  standalone: true,
  imports: [
    MovieCardComponent
  ],
  templateUrl: './all-movies.component.html',
  styleUrl: './all-movies.component.css'
})
export class AllMoviesComponent implements OnInit, OnDestroy {
  movies: Movie[] = [];
  isLoading = true;
  error = '';
  private subscription: Subscription | null = null;

  constructor(private _moviesService: MoviesService) { }

  ngOnInit() {
    this.isLoading = true;
    this.subscription = this._moviesService.getAllMovies().subscribe({
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
