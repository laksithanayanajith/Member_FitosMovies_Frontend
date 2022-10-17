import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ratingDTO } from '../Movies/movie.module';
import { ratingCreationDTO } from './rating.module';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  constructor(private httpClient: HttpClient) { }

  private apiURL_rating = environment.apiURL_movie + 'ratings';

  create(ratingCreationDTO: ratingCreationDTO): any{
    return this.httpClient.post(this.apiURL_rating, ratingCreationDTO);
  }

  delete(id: number): any{
    return this.httpClient.delete<ratingDTO>(`${this.apiURL_rating}/${id}`);
  }
}
