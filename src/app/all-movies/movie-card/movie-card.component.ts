import {Component, Input} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {DecimalPipe} from '@angular/common';
import {Movie} from '../../models/movie.model';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    DecimalPipe
  ],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css'
})
export class MovieCardComponent {
  @Input() movie!: Movie;
  @Input() type?: string;
}
