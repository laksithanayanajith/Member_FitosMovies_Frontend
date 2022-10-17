import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../auth.service';
import { MemberService } from '../../member.service';
import { usersDTO } from '../../users.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private router: Router, private formBuilder: FormBuilder, private memberService: MemberService, private authService: AuthService) { }

  ngOnInit(): void {
    this.login();
  }

  form!: FormGroup;
  viewmember!: usersDTO[];
  viewcurrentmember!: usersDTO;
  memberid: number | any;
  memberfirstname: string | any;
  membersecondname: string | any;
  type: string | any;

  login(){
    this.form = this.formBuilder.group({
      username: ['', {validators: [Validators.required]}],
      password: ['', {validators: [Validators.required]}],
    })
  }

  loginMember(){
      this.DisplayMemberNyUsername();
  }

  DisplayMemberNyUsername(){
    this.memberService.getByUsername(this.form.value.username).subscribe((member: usersDTO)=>{
      this.viewcurrentmember = member;
      console.log(member);

      this.memberid = member.id;
      this.memberfirstname = member.name;
      this.type = member.usertype;

      if(this.memberid!=undefined){
        this.authService.setcurrentMemberId(this.memberid);
        this.authService.setcurrentMemberfirstname(this.memberfirstname);
        this.authService.setcurrentMembertype(this.type);
        this.authService.setIsLogin(true);
        this.router.navigate(['/movie']);
        console.log(this.memberid);
      }else{
        Swal.fire({
          title: 'Oops!',
          text: 'Username or password does not match! Please try again!',
          imageUrl: 'https://cdn.dribbble.com/users/2469324/screenshots/6538803/comp_3.gif',
          imageWidth: 400,
          imageHeight: 330,
          imageAlt: 'Custom image',
        })
      }
    })
  }
}

/*

*/