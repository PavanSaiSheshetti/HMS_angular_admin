import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRecepientComponent } from './components/add-receptionist/add-recepient.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';

const routes: Routes = [
  {path:'',component:AdminLoginComponent},
  {path:'add',component:AddRecepientComponent},
  {path:'adminFunc',component:AdmindashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
