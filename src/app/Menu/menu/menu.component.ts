import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Auth/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  date: Date = new Date();
  Today: string = formatDate(this.date, 'EEEE, MMMM d, y', 'en-US');

  getcurrentMember(): string{
    return this.authService.getcurrentMemberfirstname();
  }

  getType(): string{
    return this.authService.getcurrentMembertype();
  }

  SignOut(){
    Swal.fire({
      title: 'Are you sure?',
      text: "If you are logout you cannot access your movies and you must login again if you want access this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Logout Now!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.authService.setIsLogin(false);
        this.router.navigate(['/home']);
      }
    })
    
  }

}
