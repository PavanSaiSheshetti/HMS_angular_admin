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
import { ViewroomsComponent } from './components/viewrooms/viewrooms.component';
import { SearchroomComponent } from './components/searchroom/searchroom.component';
import { AdminfunctionsComponent } from './components/adminfunctions/adminfunctions.component';
import { RoomNavbarComponent } from './components/roomnavbar/roomnavbar.component';
import { AddroomComponent } from './components/addroom/addroom.component';

import { EditRoomComponent } from './components/edit-room/edit-room.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { AdminnavbarComponent } from './components/adminnavbar/adminnavbar.component';
import { AddoffersComponent } from './components/addoffers/addoffers.component';
import { OfferNavbarComponent } from './components/offernavbar/offernavbar.component';
import { OfferoperationsComponent } from './components/offeroperations/offeroperations.component';
import { Offer } from './models/offer';
import { OffersComponent } from './components/offers/offers.component';
import { SearchofferComponent } from './components/searchoffer/searchoffer.component';
import { ViewoffersComponent } from './components/viewoffers/viewoffers.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    AddRecepientComponent,
    AdminLoginComponent,
    UpdateReceptionistComponent,
    AdmindashboardComponent,
    AdminnavbarComponent,AddroomComponent,AdminfunctionsComponent,
    EditRoomComponent,RoomNavbarComponent,SearchroomComponent,ViewroomsComponent,
    AddoffersComponent,OfferNavbarComponent,OfferoperationsComponent,
    OffersComponent,SearchofferComponent,ViewoffersComponent
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
