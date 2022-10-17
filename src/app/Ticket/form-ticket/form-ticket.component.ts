import { formatDate } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { TicketIntractService } from '../ticket-intract.service';
import { ticketCreationDTO } from '../ticket.module';

@Component({
  selector: 'app-form-ticket',
  templateUrl: './form-ticket.component.html',
  styleUrls: ['./form-ticket.component.css']
})
export class FormTicketComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private ticketIntractService: TicketIntractService) { }

  ngOnInit(): void {
    this.ticketForm();
    this.getDate();
  }

  form!: FormGroup;
  selected!: Date;

  ticketForm(): void{
    this.form = this.formBuilder.group({
      movie_id: ['', {validators: [Validators.required , Validators.pattern(('^[0-9]*$'))]}],
      movie_owner: ['', {validators: [Validators.required , Validators.pattern(('^[0-9]*$'))]}],
      show_date: [''],
      price: ['', {validators: [Validators.required , Validators.pattern(('^[0-9]*$'))]}],

    })
  }

  getDate(){
   console.log("date is "+this.selected);
  }

  GetErrorMessageFieldMovieID(){
    if(this.form.get('movieid')?.hasError('required')){
      return 'The movie id feild is required!';
    }
    else if(this.form.get('movieid')?.hasError('pattern')){
      return 'Movie id must have numbers only!';
    }else{
      return '';
    }
  }

  GetErrorMessageFieldOwnerID(){
    if(this.form.get('movieownerid')?.hasError('required')){
      return 'The movie owner id feild is required!';
    }
    else if(this.form.get('movieownerid')?.hasError('pattern')){
      return 'Movie owner id must have numbers only!';
    }else{
      return '';
    }
  }

  GetErrorMessageFielPrice(){
    if(this.form.get('price')?.hasError('required')){
      return 'The movie price feild is required!';
    }else{
      return '';
    }
  }

  @Output()
  onSaveChanges: EventEmitter<ticketCreationDTO> = new EventEmitter<ticketCreationDTO>();

  @Input()
  tickets!: ticketCreationDTO | any;


  saveChangesForm(): void{
    this.onSaveChanges.emit(this.form.value);
  }

  clear(): void{
    this.form.reset();
  }

  help(){
    Swal.fire({
      title: 'Have Problem?',
      text: 'If you trouble in when adding new ticket.. do not warry! Follow these instroductions. 1st movie id, movie owner id cannot be blank and it must be numbers. 3rd you can add show date by date picker. In 4th you must add price and it must be numbers only. Thats it!',
      imageUrl: 'https://cdn.dribbble.com/users/291221/screenshots/1425333/helper.gif',
      imageWidth: 400,
      imageHeight: 320,
      imageAlt: 'Custom image',
    })
  }

}
