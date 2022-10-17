import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieIntractService {

  constructor() { }

  protected movie_id: number | any;
  protected director_id: number | any;
  protected director_firstname: string | any;
  protected director_secondname: string | any;

  public setMovieId(movie_id: number): void{
    this.movie_id = movie_id;
  }

  public getMovieId(): number{
    return this.movie_id;
  }

  public setDirectorId(director_id: number): void{
    this.director_id = director_id;
  }

  public getDirectorId(): number{
    return this.director_id;
  }

  public setDirectorFirstName(director_firstname: string): void{
    this.director_firstname = director_firstname;
  }

  public getDirectorFirstName(): string{
    return this.director_firstname;
  }

  public setDirectorSecondName(director_secondname: string): void{
    this.director_secondname = director_secondname;
  }

  public getDirectorSecondName(): string{
    return this.director_secondname;
  }
}
