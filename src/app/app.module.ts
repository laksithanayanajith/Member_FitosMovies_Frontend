import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { BrowserModule } from '@angular/platform-browser';

import { MaterialModule } from './Material/material.module';

import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { NgxStarRatingModule } from 'ngx-star-rating';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './Menu/menu/menu.component';
import { DarkModeComponent } from './Utitlities/dark-mode/dark-mode.component';
import { FavouriteComponent } from './Favourite/favourite/favourite.component';
import { RegistrationComponent } from './Auth/Registration/registration/registration.component';
import { MovieComponent } from './Movies/movie/movie.component';
import { DetailsComponent } from './Movies/details/details.component';
import { RatingComponent } from './Rating/rating/rating.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './Home/home/home.component';
import { LoginComponent } from './Auth/Login/login/login.component';
import { CreateTicketComponent } from './Ticket/create-ticket/create-ticket.component';
import { EditTicketComponent } from './Ticket/edit-ticket/edit-ticket.component';
import { FormTicketComponent } from './Ticket/form-ticket/form-ticket.component';
import { IndexTicketComponent } from './Ticket/index-ticket/index-ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DarkModeComponent,
    FavouriteComponent,
    RegistrationComponent,
    MovieComponent,
    DetailsComponent,
    RatingComponent,
    HomeComponent,
    LoginComponent,
    CreateTicketComponent,
    EditTicketComponent,
    FormTicketComponent,
    IndexTicketComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    CommonModule,
    HttpClientModule,
    NgbPaginationModule,
    NgbAlertModule,
    NgxStarRatingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
