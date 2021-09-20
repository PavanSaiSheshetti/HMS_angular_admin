import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reception-dashboard',
  templateUrl: './reception-dashboard.component.html',
  styleUrls: ['./reception-dashboard.component.css']
})
export class ReceptionDashboardComponent implements OnInit {

  receptionistId?:number;
  edit?: number= -1;
  constructor(public router: Router, public activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.receptionistId = this.activatedRoute.snapshot.params['receptionistId'];
  }

  myProfile(){
    this.router.navigate(['receptionistprofile', this.receptionistId])
  }

  bookingsList(){
    this.router.navigate(['bookingsPage',this.receptionistId])
  }
  home(){
    console.log("Returning Home")
    this.router.navigate([''])
  }
  logout(){
    console.log("Returning to Receptionist Login Page")
    this.router.navigate(['receptionistlogin'])
  }

}
