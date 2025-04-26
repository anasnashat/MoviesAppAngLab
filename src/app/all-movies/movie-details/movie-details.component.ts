import {Component, OnDestroy, OnInit} from '@angular/core';
import {MoviesService} from '../../movies.service';
import {ActivatedRoute} from '@angular/router';
import {DatePipe} from '@angular/common';
import {Movie} from '../../models/movie.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [
    DatePipe,
  ],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent implements OnInit, OnDestroy {
  movieId: number | undefined;
  type: string | null | undefined;
  movie: Movie | null = null;
  isLoading = true;
  error = '';
  private subscription: Subscription | null = null;

  constructor(
    private _moviesService: MoviesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    this.movieId = idParam ? +idParam : undefined;
    this.type = this.route.snapshot.paramMap.get('type');

    if (this.movieId && this.type) {
      this.loadMovieDetails();
    } else {
      this.error = 'Invalid movie ID or type.';
      this.isLoading = false;
    }
  }

  loadMovieDetails() {
    this.isLoading = true;
    if (this.movieId && this.type) {
      this.subscription = this._moviesService.getMovieDetails(this.movieId, this.type).subscribe({
        next: (data) => {
          this.movie = data;
          this.isLoading = false;
        },
        error: (err) => {
          this.error = 'Failed to load details. Please try again later.';
          this.isLoading = false;
          console.error(err);
        }
      });
    }
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
