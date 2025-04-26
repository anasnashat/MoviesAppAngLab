import {Component, OnDestroy, OnInit} from '@angular/core';
import {MoviesService} from '../movies.service';
import {DecimalPipe} from '@angular/common';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {MovieCardComponent} from '../all-movies/movie-card/movie-card.component';
import {Movie} from '../models/movie.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-tv',
  standalone: true,
  imports: [
    MovieCardComponent,
    RouterLink,
    RouterLinkActive,
    DecimalPipe
  ],
  templateUrl: './tv.component.html',
  styleUrl: './tv.component.css'
})
export class TVComponent implements OnInit, OnDestroy {
  tvShows: Movie[] = [];
  isLoading = true;
  error = '';
  private subscription: Subscription | null = null;

  constructor(private _moviesService: MoviesService) { }

  ngOnInit() {
    this.isLoading = true;
    this.subscription = this._moviesService.getPopularTVShows().subscribe({
      next: (data) => {
        this.tvShows = data.results;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Failed to load TV shows. Please try again later.';
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
