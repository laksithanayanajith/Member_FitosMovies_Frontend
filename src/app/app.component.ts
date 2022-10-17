import { Component } from '@angular/core';
import { AuthService } from './Auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fitosmovies_member';

  constructor(private authService: AuthService){}

  isUserLogin(): boolean{
    return this.authService.getIsLogin();
  }
}
