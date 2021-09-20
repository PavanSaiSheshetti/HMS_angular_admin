import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Bookings } from 'src/app/models/bookings';
import { ReceptionService } from 'src/app/services/reception.service';



@Component({
  selector: 'app-allocate-rooms',
  templateUrl: './allocate-rooms.component.html',
  styleUrls: ['./allocate-rooms.component.css']
})
export class AllocateRoomsComponent implements OnInit {


  roomNumber ?:number;
  userName ?:string;
  bookingForm ?:FormGroup;
  booking ?: Bookings;
  bookedList : Bookings[] = [];
  constructor(public activedRoute:ActivatedRoute,public formBuilder:FormBuilder,public receptionService:ReceptionService,public router:Router) {

   }


  ngOnInit(): void {
   
    this.roomNumber = 1;

    this.receptionService.getBookingRooms(this.roomNumber)
    .subscribe(data =>{
      console.log(data),
      this.bookedList=data
    })

  }

}
