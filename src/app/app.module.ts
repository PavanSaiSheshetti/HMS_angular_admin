import { NgModule } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
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
import { UpdateOfferComponent } from './components/update-offer/update-offer.component';
import { AddreceptionistComponent } from './components/addreceptionist/addreceptionist.component';
import { ReceptionistComponent } from './components/receptionist/receptionist.component';
import { UpdatereceptionistComponent } from './components/updatereceptionist/updatereceptionist.component';
import { ViewallreceptionistComponent } from './components/viewallreceptionist/viewallreceptionist.component';
import { ViewrecbyIdComponent } from './components/viewrecby-id/viewrecby-id.component';
import { ReceptionistNavbarComponent } from './components/receptionist-navbar/receptionist-navbar.component';
import { BookingHistoryComponent } from './components/booking-history/booking-history.component';
import { ViewDetailsComponent } from './components/view-details/view-details.component';
import { FeedbackDetailsComponent } from './components/feedback-details/feedback-details.component';
import { FeedbackFormComponent } from './components/feedback-form/feedback-form.component';
import { AboutComponent } from './components/about/about.component';
import { FacilitiesComponent } from './components/facilities/facilities.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    AddreceptionistComponent,
    AdminLoginComponent,
    AdmindashboardComponent,ReceptionistNavbarComponent,
    AdminnavbarComponent,AddroomComponent,AdminfunctionsComponent,
    EditRoomComponent,RoomNavbarComponent,SearchroomComponent,ViewroomsComponent,
    AddoffersComponent,OfferNavbarComponent,OfferoperationsComponent,
    OffersComponent,SearchofferComponent,ViewoffersComponent,UpdateOfferComponent,ReceptionistComponent,UpdatereceptionistComponent,ViewallreceptionistComponent,ViewrecbyIdComponent,
    BookingHistoryComponent,ViewDetailsComponent,
    FeedbackDetailsComponent,
    FeedbackFormComponent,
    AboutComponent,
    FacilitiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
