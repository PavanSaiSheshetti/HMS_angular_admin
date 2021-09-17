import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Offer } from 'src/app/models/offer';
import { OfferService } from 'src/app/services/offer.service';

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
          this.successMessage = "Offer Id: "+offerId +" :   successfully deleted"
  }

  editOffer(offerId:number)
  {
    this.router.navigate(['updateAOffer',offerId])
  }
}
