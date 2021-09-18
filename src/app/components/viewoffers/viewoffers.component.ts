import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Offer } from 'src/app/models/offer';
import { OfferService } from 'src/app/services/offer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-viewoffers',
  templateUrl: './viewoffers.component.html',
  styleUrls: ['./viewoffers.component.css']
})
export class ViewoffersComponent implements OnInit {

  
  constructor(public offerService:OfferService,public router:Router) { }
  
  successMessage?:string;
  errorMessage?:string;
  offer:Offer[]=[];

  ngOnInit(): void {
    this.refreshOffer()
  }

  refreshOffer()
  {
    this.offerService.getOffers().subscribe((data:any[])=>{
      console.log("####Getting all offers from DB through Spring..")
      console.log(data);
      this.offer=data;
    },err=>this.errorMessage=err)
  }
   
  deleteOffer(offerId:any)
  {
    this.offerService.deleteOffer(offerId)
    
        .subscribe(
          response => {
            console.log(response);
            console.log("#######deleted successfully ");
          },
          error => {
            this.refreshOffer();
            this.router.navigate(['showoffers'])
            console.log(error);
          });
         
  }

  editOffer(offerId:number)
  {
    this.router.navigate(['updateAOffer',offerId])
  }

  alertConfirmation(offerId:number){
    Swal.fire({
      title: 'Are you sure?',
      text: 'This process is irreversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, go ahead.',
      cancelButtonText: 'No, let me think'
    }).then((result) => {
      if (result.value) {
        this.deleteOffer(offerId)
        Swal.fire(
          'Removed!',
          'Offer removed successfully!',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Offer Not Deleted!!',
          'error'
        )
      }
    })
  }  
}
