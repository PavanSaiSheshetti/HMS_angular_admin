import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AddoffersComponent } from './components/addoffers/addoffers.component';
import { AddreceptionistComponent } from './components/addreceptionist/addreceptionist.component';
import { AddroomComponent } from './components/addroom/addroom.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { AdminfunctionsComponent } from './components/adminfunctions/adminfunctions.component';
import { BookingHistoryComponent } from './components/booking-history/booking-history.component';
import { EditRoomComponent } from './components/edit-room/edit-room.component';
import { FacilitiesComponent } from './components/facilities/facilities.component';
import { FeedbackDetailsComponent } from './components/feedback-details/feedback-details.component';
import { FeedbackFormComponent } from './components/feedback-form/feedback-form.component';
import { OfferoperationsComponent } from './components/offeroperations/offeroperations.component';
import { OffersComponent } from './components/offers/offers.component';
import { ReceptionistComponent } from './components/receptionist/receptionist.component';
import { SearchofferComponent } from './components/searchoffer/searchoffer.component';

import { SearchroomComponent } from './components/searchroom/searchroom.component';
import { UpdateOfferComponent } from './components/update-offer/update-offer.component';
import { UpdatereceptionistComponent } from './components/updatereceptionist/updatereceptionist.component';
import { ViewDetailsComponent } from './components/view-details/view-details.component';
import { ViewallreceptionistComponent } from './components/viewallreceptionist/viewallreceptionist.component';

import { ViewoffersComponent } from './components/viewoffers/viewoffers.component';
import { ViewrecbyIdComponent } from './components/viewrecby-id/viewrecby-id.component';
import { ViewroomsComponent } from './components/viewrooms/viewrooms.component';

const routes: Routes = [
  {path:'',component:AdminLoginComponent},
  {path:'admindashboard',component:AdmindashboardComponent},
  { path: 'adminFunc', component:AdminfunctionsComponent },
  { path: 'addRoom', component:AddroomComponent },
  
  { path: 'editRoom/:roomId', component:EditRoomComponent },
  { path: 'viewrooms', component:ViewroomsComponent },
  { path: 'searchroom', component:SearchroomComponent },

  {path:'showoffers',component:ViewoffersComponent},
  {path:'addoffers',component:AddoffersComponent},
  {path:'searchoffer',component:OfferoperationsComponent},
  {path:'offer',component:OffersComponent},
  {path:'offeroperations',component:OfferoperationsComponent},
  {path:'searchofferbyid',component:SearchofferComponent},
  {path:'updateAOffer/:offerId',component:UpdateOfferComponent},

  {path:'receptionist' , component:ReceptionistComponent },
  {path:'addrec' , component:AddreceptionistComponent },
  {path:'editrec/:receptionistId' , component:UpdatereceptionistComponent },
  {path:'viewall' , component:ViewallreceptionistComponent },
  {path:'viewid' , component:ViewrecbyIdComponent },
  {path:'bookingDetails', component:BookingHistoryComponent},
  {path:'viewDetails/:bookingId', component:ViewDetailsComponent},
  { path: 'view', component: FeedbackDetailsComponent},
  { path: 'form', component: FeedbackFormComponent},
  {path : 'about',component:AboutComponent},
  {path : 'facilities',component:FacilitiesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
