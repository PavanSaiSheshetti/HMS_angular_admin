import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userName?:String;
  // public activatedRoute:ActivatedRoute
  // this.userName = this.activatedRoute.snapshot.params['userName'];

  constructor(public router : Router, public activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.userName = this.activatedRoute.snapshot.params['userName'];
  }
  billing(){
    this.router.navigate(['billing']);
  }
  book(){
    this.router.navigate(['customerBooking',this.userName ]);
    
  }
  cancleBooking(){
    
    this.router.navigate(['cancelBooking',this.userName ]);
  }
  updateBooking(){
    
    this.router.navigate(['editBooking',this.userName ]);
  }
  addPickDrop(){
    
    this.router.navigate(['addPickAndDrop',this.userName, "-1"]);
  }
  canclePickDrop(){
    this.router.navigate(['cancelPickAndDrop',this.userName ]);
  }
  updatePickDrop(){
    this.router.navigate(['updatePickAndDrop',this.userName ]);
  }
  viewHistory(){
    this.router.navigate(['viewBookingHistory',this.userName ]);
  }
}
