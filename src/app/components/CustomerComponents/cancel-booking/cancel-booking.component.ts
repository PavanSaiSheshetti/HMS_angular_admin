import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cancel-booking',
  templateUrl: './cancel-booking.component.html',
  styleUrls: ['./cancel-booking.component.css']
})
export class CancelBookingComponent implements OnInit {
  cancelBooking: FormGroup;
  errorMessage?:String;
  bookingId? : number;
  userName?:String;
  // public activatedRoute:ActivatedRoute
  // this.Id = this.activatedRoute.snapshot.params['id'];

  constructor(public formBuilder:FormBuilder, public router:Router,public customerService:CustomerService, public activatedRoute:ActivatedRoute) {
  }

  ngOnInit(): void {
    this.userName = this.activatedRoute.snapshot.params['userName'];
    this.cancelBooking = this.formBuilder.group({
      bookingId : ['', Validators.required],
      customerUserName : [this.userName, Validators.required],
      reason : ['', Validators.required]
    })

  }
  sendCancelBooking(data: any){
    console.log(this.cancelBooking?.value);
    console.log(data.bookingId);
  
    this.customerService.updateCancellationStatus(this.userName,"True")

    // this.customerService.cancelBooking(data.bookingId)
      .subscribe(
        response => {
          console.log(response);
          // this.successMessage = doctorId +" :   successfully deleted";
          Swal.fire('Success', ' Deleted Successfully!', 'success')
          console.log("#######Deleted successfully ");
        },
        error => {
          console.log(error);
          Swal.fire('Success', 'Your login is successfull', 'success')
        this.router.navigate(['customerDashboard', this.userName])

        });
  }

  Back(){
    this.router.navigate(["customerDashboard", this.userName]);
  }



}
