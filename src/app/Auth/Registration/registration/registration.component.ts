import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MemberService } from '../../member.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private memberService: MemberService) { }

  ngOnInit(): void {
    this.registerForm();
  }

  form!: FormGroup;

  registerForm(){
    this.form = this.formBuilder.group({
      name: ['', {validators: [Validators.required, Validators.pattern("([a-zA-Z',.-]+( [a-zA-Z',.-]+)*){2,30}")]}],
      address: ['', {validators: [Validators.required]}],
      telephone: ['', {validators: [Validators.required]}],
      username: ['', {validators: [Validators.required]}],
      email: ['', {validators: [Validators.required, Validators.email]}],
      usertype: ['member', {validators: [Validators.required]}],
      password: ['', {validators: [Validators.required]}],
    })
  }

  GetErrorMessageFieldName(){
    if(this.form.get('name')?.hasError('required')){
      return 'The name feild is required!';
    }
    else if(this.form.get('name')?.hasError('pattern')){
      return 'Invalid name! Please try again!';
    }else{
      return '';
    }
  }

  GetErrorMessageFieldAddress(){
    if(this.form.get('address')?.hasError('required')){
      return 'The address feild is required!';
    }else{
      return '';
    }
  }

  GetErrorMessageFieldTelephone(){
    if(this.form.get('telephone')?.hasError('required')){
      return 'The telephone feild is required!';
    }else{
      return '';
    }
  }

  GetErrorMessageFieldUsername(){
    if(this.form.get('username')?.hasError('required')){
      return 'The username feild is required!';
    }else{
      return '';
    }
  }

  GetErrorMessageFieldEmail(){
    if(this.form.get('email')?.hasError('required')){
      return 'The email feild is required!';
    }else if(this.form.get('email')?.hasError('email')){
      return 'Invalid email! Please try again!';
    }
    else{
      return '';
    }
  }

  GetErrorMessageFieldPassword(){
    if(this.form.get('password')?.hasError('required')){
      return 'The password feild is required!';
    }else{
      return '';
    }
  }

  Register(){

    Swal.fire({
      title: 'Registred Successfully!',
      text: 'You will redirect to login page and re-login now!',
      imageUrl: 'https://cdn.dribbble.com/users/129972/screenshots/3964116/75_smile.gif',
      imageWidth: 400,
      imageHeight: 300,
      imageAlt: 'Custom image',
    })


    this.memberService.create(this.form.value).subscribe(()=>{
      this.router.navigate(['/login']);
    });
    
  }

}
