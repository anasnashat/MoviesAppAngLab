export interface Movie {
  id: number;
  title?: string;
  name?: string;
  poster_path?: string;
  profile_path?: string;
  backdrop_path?: string;
  media_type?: string;
  first_air_date?: string;
  release_date?: string;
  overview?: string;
  vote_average?: number;
  vote_count?: number;
  popularity?: number;
  original_language?: string;
  known_for_department?: string;
  biography?: string;
  birthday?: string;
  deathday?: string;
  place_of_birth?: string;
  genres?: Genre[];
  production_companies?: Company[];
  networks?: Network[];
  status?: string;
  tagline?: string;
  runtime?: number;
  number_of_seasons?: number;
  number_of_episodes?: number;
  homepage?: string;
  imdb_id?: string;
}

export interface Genre {
  id: number;
  name: string;
}

export interface Company {
  id: number;
  name: string;
  logo_path?: string;
  origin_country?: string;
}

export interface Network {
  id: number;
  name: string;
  logo_path?: string;
  origin_country?: string;
}

export interface ApiResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
