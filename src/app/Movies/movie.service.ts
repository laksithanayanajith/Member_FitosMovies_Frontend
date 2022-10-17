import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { directorDTO, favouriteCreationDTO, favouriteDTO, movieDTO, ratingDTO, totalRatingDTO } from './movie.module';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) { }

  private apiURL = environment.apiURL_movie + 'movies';
  private apiURL_director = environment.apiURL_movie + 'directors';
  private apiURL_rating = environment.apiURL_movie + 'ratings/movie';
  private apiURL_favourite = environment.apiURL_movie + 'favourites';
  private apiURL_favourite_delete = environment.apiURL_movie + 'favourite';
  private apiURL_totalrating = environment.apiURL_movie + 'ratings/total';

  getAllMovies(): Observable<movieDTO[]>{
    return this.httpClient.get<movieDTO[]>(this.apiURL);
  }

  getByID(id: number): Observable<movieDTO>{
    return this.httpClient.get<movieDTO>(`${this.apiURL}/${id}`);
  }

  getRatingByMovieID(id: number): Observable<ratingDTO[]>{
    return this.httpClient.get<ratingDTO[]>(`${this.apiURL_rating}/${id}`);
  }

  getTotalRatingByMovieID(id: number): Observable<totalRatingDTO>{
    return this.httpClient.get<totalRatingDTO>(`${this.apiURL_totalrating}/${id}`);
  }

  getFavouriteMoviesByMemberId(id: number): Observable<favouriteDTO[]>{
    return this.httpClient.get<favouriteDTO[]>(`${this.apiURL_favourite}/${id}`);
  }

  getDirectorByDiectorID(id: number): Observable<directorDTO>{
    return this.httpClient.get<directorDTO>(`${this.apiURL_director}/${id}`);
  }

  create(favouriteCreationDTO: any): any{
    return this.httpClient.post(this.apiURL_favourite, favouriteCreationDTO);
  }

  delete(id: number): any{
    return this.httpClient.delete<favouriteDTO>(`${this.apiURL_favourite_delete}/${id}`);
  }
}
