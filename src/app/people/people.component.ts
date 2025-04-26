import {Component, OnDestroy, OnInit} from '@angular/core';
import {MoviesService} from '../movies.service';
import {MovieCardComponent} from '../all-movies/movie-card/movie-card.component';
import {Movie} from '../models/movie.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-people',
  standalone: true,
  imports: [
    MovieCardComponent,

  ],
  templateUrl: './people.component.html',
  styleUrl: './people.component.css'
})
export class PeopleComponent implements OnInit, OnDestroy {
  people: Movie[] = [];
  isLoading = true;
  error = '';
  private subscription: Subscription | null = null;

  constructor(private _moviesService: MoviesService) { }

  ngOnInit() {
    this.isLoading = true;
    this.subscription = this._moviesService.getPeople().subscribe({
      next: (data) => {
        this.people = data.results;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Failed to load people. Please try again later.';
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
