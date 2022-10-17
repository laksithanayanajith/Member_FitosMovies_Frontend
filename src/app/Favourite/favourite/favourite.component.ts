import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MovieIntractService } from 'src/app/Movies/movie-intract.service';
import { totalRatingDTO, movieDTO } from 'src/app/Movies/movie.module';
import { MovieService } from 'src/app/Movies/movie.service';
import Swal from 'sweetalert2';
import AOS from 'aos';
import { favouriteDTO } from '../favourite.module';
import { AuthService } from 'src/app/Auth/auth.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  total_rating!: totalRatingDTO;
  viewmovie!: movieDTO[];
  form!: FormGroup;
  favourite: favouriteDTO[] | any;

  constructor(private router: Router, private movieService: MovieService, private movieIntractService: MovieIntractService, private formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
    AOS.init();
    this.DispalyAllFavourite();
    this.DisplayAllMovies();    
  }

  protected is_added: boolean = false;

  date: Date = new Date();
  Today: string = formatDate(this.date, 'y-MM-dd HH:mm:ss', 'en-US');


  getMovieId(): number{
    return this.movieIntractService.getMovieId();
  }

  isFavorite(movie_id:number): boolean {
   if(this.favourite!=null){

    let favs= this.favourite.filter((m:favouriteDTO)=>m.movie_id==movie_id);
    console.log("fav "+favs);
    
    if(favs.length==0){
     return false;
    }
    else{
      return true;
    }   
   }
   else{
    return false;
  }
   
   // return result; 
  }

  RemoveFavourite(movie_id: number, movie_name: String){
   // this.is_added = false;
  //  fav:favouriteDTO;
     let fav_id = 0;
    this.favourite.map((f:favouriteDTO)=>{
     if(f.movie_id ==movie_id){
      fav_id=f.id;
     }
    });

    console.log(fav_id);
    this.movieService.delete(fav_id).subscribe(()=>{      
      this.DispalyAllFavourite();
      Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: movie_name+' has been removed from favourite!',
      showConfirmButton: false,
      timer: 1500
    })
    })
  }

  
  DisplayAllMovies(): void{
    this.movieService.getAllMovies().subscribe((movie: movieDTO[])=>{
      this.viewmovie = movie;
      console.log(movie);
    })
  }

  DispalyAllFavourite():void{
    this.movieService.getFavouriteMoviesByMemberId(this.authService.getcurrentMemberId()).subscribe((favourite: favouriteDTO[])=>{
      console.log(this.authService.getcurrentMemberId());
      this.favourite = favourite;
      console.log("number of fav "+favourite.length);
    })
  }

  DisplayTotalRatingByMovieId(id: number): void{
    this.movieService.getTotalRatingByMovieID(id).subscribe((total_rating: totalRatingDTO)=>{
      this.total_rating = total_rating;
      

      Swal.fire({
        title: total_rating + ' ' + 'reviews!',
        text: 'This movie is growing up!',
        imageUrl: 'https://i.pinimg.com/originals/68/8e/9e/688e9eb45c2f5cc82361d5c305ccc0ca.gif',
        imageWidth: 400,
        imageHeight: 400,
        imageAlt: 'Custom image',
      })
      console.log(total_rating);
    })
  }

  viewnow(id: number){
    this.movieIntractService.setMovieId(id);
    this.router.navigate(['/movie/detail']);
  }

}
