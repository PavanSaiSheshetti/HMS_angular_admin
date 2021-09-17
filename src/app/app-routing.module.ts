import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRecepientComponent } from './components/add-receptionist/add-recepient.component';
import { AddroomComponent } from './components/addroom/addroom.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { AdminfunctionsComponent } from './components/adminfunctions/adminfunctions.component';
import { EditRoomComponent } from './components/edit-room/edit-room.component';

import { SearchroomComponent } from './components/searchroom/searchroom.component';
import { ViewroomsComponent } from './components/viewrooms/viewrooms.component';

const routes: Routes = [
  {path:'',component:AdminLoginComponent},
  {path:'add',component:AddRecepientComponent},
  {path:'admindashboard',component:AdmindashboardComponent},
  { path: 'adminFunc', component:AdminfunctionsComponent },
  { path: 'addRoom', component:AddroomComponent },
  
  { path: 'editRoom/:roomId', component:EditRoomComponent },
  { path: 'viewrooms', component:ViewroomsComponent },
  { path: 'searchroom', component:SearchroomComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
