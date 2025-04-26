import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { ApiResponse, Movie } from './models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private baseUrl = 'https://api.themoviedb.org/3/';
  private apiKey = '?api_key=ff06f805de9a2d3be520175ad7f83bb8';

  constructor(private _httpClient: HttpClient) { }

  getAllMovies(): Observable<ApiResponse> {
    const url = `${this.baseUrl}trending/all/day${this.apiKey}`;
    return this._httpClient.get<ApiResponse>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  getMovieDetails(id: number, type: string): Observable<Movie> {
    const url = `${this.baseUrl}${type}/${id}${this.apiKey}`;
    return this._httpClient.get<Movie>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  getPopularMovies(): Observable<ApiResponse> {
    const url = `${this.baseUrl}movie/popular${this.apiKey}`;
    return this._httpClient.get<ApiResponse>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  getPeople(): Observable<ApiResponse> {
    const url = `${this.baseUrl}person/popular${this.apiKey}`;
    return this._httpClient.get<ApiResponse>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  getPopularTVShows(): Observable<ApiResponse> {
    const url = `${this.baseUrl}tv/popular${this.apiKey}`;
    return this._httpClient.get<ApiResponse>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(() => new Error('Something went wrong. Please try again later.'));
  }
}
