import { formatDate } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Auth/auth.service';
import { MovieIntractService } from 'src/app/Movies/movie-intract.service';
import { ratingCreationDTO } from '../rating.module';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private movieIntractService: MovieIntractService, private authService: AuthService) {}

  ngOnInit(): void {
    this.ratingForm();
  }

  date: Date = new Date();
  Today: string = formatDate(this.date, 'y-MM-dd HH:mm:ss', 'en-US');

  form!: FormGroup | any;

  ratingForm(): void{
    this.form = this.formBuilder.group({
      mark: ['', {validators: [Validators.required]}],
      description: ['', {validators: [Validators.required]}],
      movie_id: [this.movieIntractService.getMovieId(), {validators: [Validators.required]}],
      member_id: [this.authService.getcurrentMemberId(), {validators: [Validators.required]}],
      added_date_time: [this.Today, {validators: [Validators.required]}],
    })
  }

  GetErrorMessageFieldDescription(): string{
    if(this.form.get('description').hasError('required')){
      return 'The movie description feild is required!';
    }else{
      return '';
    }
  }

  @Output()
  onSaveChanges: EventEmitter<ratingCreationDTO> = new EventEmitter<ratingCreationDTO>();

  @Input()
  model!: ratingCreationDTO | any;

  saveChangesForm(): void{
    this.onSaveChanges.emit(this.form.value);
  }

  getHelp(): void{
    alert("you need help!");
  }

  clear(): void{
    this.form.reset();
  }

}
