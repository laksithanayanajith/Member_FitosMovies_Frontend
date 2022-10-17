import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { favouriteCreationDTO } from './favourite.module';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {

  constructor(private httpClient: HttpClient) { }

  private apiURL_favourite = environment.apiURL_movie + 'favourites';

  create(favouriteCreationDTO: favouriteCreationDTO): any{
    return this.httpClient.post(this.apiURL_favourite, favouriteCreationDTO);
  }
}
