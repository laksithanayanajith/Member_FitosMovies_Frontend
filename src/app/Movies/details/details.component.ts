import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonModule, formatDate } from '@angular/common';
import { Router } from '@angular/router';
import { MovieIntractService } from '../movie-intract.service';
import { directorDTO, movieDTO, ratingDTO, totalRatingDTO } from '../movie.module';
import { MovieService } from '../movie.service';
import { ratingCreationDTO } from 'src/app/Rating/rating.module';
import Swal from 'sweetalert2';
import { RatingService } from 'src/app/Rating/rating.service';
import { AuthService } from 'src/app/Auth/auth.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private router: Router , private movieService: MovieService, private ratingService: RatingService, private movieIntractService: MovieIntractService, private authService: AuthService) {}

  ngOnInit(): void {
    this.DisplayMovieById();
    this.DisplayTotalRatingByMovieId();
    this.DisplayRatingsByMovieId();
  }

  date: Date = new Date();
  Today: string = formatDate(this.date, 'yMdHHmmss', 'en-US');

  movie!: movieDTO;
  director!: directorDTO;
  rating!: ratingDTO[];
  total_rating!: totalRatingDTO;

  getcurrentUserType(): string{
    return this.authService.getcurrentMembertype();
  }

  saveChanges(ratingCreationDTO: ratingCreationDTO){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your Review Added Successfully!',
      showConfirmButton: false,
      timer: 1500
    })
    this.ratingService.create(ratingCreationDTO).subscribe(()=>{
      console.log(ratingCreationDTO);
      this.router.navigate(['/movie']);
    });
  }

  DisplayMovieById(): void{
    this.movieService.getByID(this.movieIntractService.getMovieId()).subscribe((movie: movieDTO)=>{
      this.movie = movie;
    })
  }

  DisplayTotalRatingByMovieId(): void{
    this.movieService.getTotalRatingByMovieID(this.movieIntractService.getMovieId()).subscribe((total_rating: totalRatingDTO)=>{
      this.total_rating = total_rating;
      console.log(total_rating);
    })
  }

  DisplayRatingsByMovieId(): void{
    this.movieService.getRatingByMovieID(this.movieIntractService.getMovieId()).subscribe((rating: ratingDTO[])=>{
      this.rating = rating;
      console.log(rating);
    })
  }

  DeleteRating(id: number): void{

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        this.ratingService.delete(id).subscribe(()=>{
          this.DisplayRatingsByMovieId();
        })
      }
    })
  }

  getcurrentUser(): any{
    return this.authService.getcurrentMemberId();
  }

  BuyNow(id: number, name: string){
    Swal.fire({
      title: 'New Token for ' + name,
      text: 'MOV'+id+'MEM'+this.authService.getcurrentMemberId()+this.Today + ' This will be your new token for '+name+ ' Present this token to the admin to purchase a new ticket.',
      imageUrl: 'https://cdn.dribbble.com/users/149398/screenshots/4959757/125-ticket.gif',
      imageWidth: 400,
      imageHeight: 300,
      imageAlt: 'Custom image',
    })
  }

}
