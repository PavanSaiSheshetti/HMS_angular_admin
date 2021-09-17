import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRecepientComponent } from './components/add-receptionist/add-recepient.component';
import { AddoffersComponent } from './components/addoffers/addoffers.component';
import { AddroomComponent } from './components/addroom/addroom.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { AdminfunctionsComponent } from './components/adminfunctions/adminfunctions.component';
import { EditRoomComponent } from './components/edit-room/edit-room.component';
import { OfferoperationsComponent } from './components/offeroperations/offeroperations.component';
import { OffersComponent } from './components/offers/offers.component';
import { SearchofferComponent } from './components/searchoffer/searchoffer.component';

import { SearchroomComponent } from './components/searchroom/searchroom.component';
import { ViewoffersComponent } from './components/viewoffers/viewoffers.component';
import { ViewroomsComponent } from './components/viewrooms/viewrooms.component';

const routes: Routes = [
  {path:'',component:AdminLoginComponent},
  {path:'add',component:AddRecepientComponent},
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
  {path:'searchofferbyid',component:SearchofferComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
