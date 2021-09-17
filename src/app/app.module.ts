import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddRecepientComponent } from './components/add-receptionist/add-recepient.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { UpdateReceptionistComponent } from './components/update-receptionist/update-receptionist.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { AdminnavbarComponent } from './components/adminnavbar/adminnavbar.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    AddRecepientComponent,
    AdminLoginComponent,
    UpdateReceptionistComponent,
    AdmindashboardComponent,
    AdminnavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
