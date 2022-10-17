import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Auth/auth.guard';
import { LoginComponent } from './Auth/Login/login/login.component';
import { RegistrationComponent } from './Auth/Registration/registration/registration.component';
import { FavouriteComponent } from './Favourite/favourite/favourite.component';
import { HomeComponent } from './Home/home/home.component';
import { DetailsComponent } from './Movies/details/details.component';
import { MovieComponent } from './Movies/movie/movie.component';
import { CreateTicketComponent } from './Ticket/create-ticket/create-ticket.component';
import { EditTicketComponent } from './Ticket/edit-ticket/edit-ticket.component';
import { IndexTicketComponent } from './Ticket/index-ticket/index-ticket.component';

const routes: Routes = [

  {path: '', redirectTo: '/home', pathMatch:"full"},
  {path: 'home', component: HomeComponent},

  {path: 'login', component: LoginComponent},

  {path: 'registration', component: RegistrationComponent},


  {path: 'movie', component: MovieComponent, canActivate: [AuthGuard]},
  {path: 'movie/detail', component: DetailsComponent, canActivate: [AuthGuard]},

  {path: 'favourite', component: FavouriteComponent, canActivate: [AuthGuard]},

  {path: 'ticket', component: IndexTicketComponent, canActivate: [AuthGuard]},
  {path: 'ticket/addnew', component: CreateTicketComponent, canActivate: [AuthGuard]},
  {path: 'ticket/edit/:id', component: EditTicketComponent, canActivate: [AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
