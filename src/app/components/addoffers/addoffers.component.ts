import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Offer } from 'src/app/model/offer';
import { OfferService } from 'src/app/service/offer.service';

@Component({
  selector: 'app-addoeffers',
  templateUrl: './addoffers.component.html',
  styleUrls: ['./addoffers.component.css']
})
export class AddoffersComponent implements OnInit {

  constructor(public activatedRoute :ActivatedRoute,public formBuilder:FormBuilder, public router: Router,public offerSerivce:OfferService) { }
  
  offerId?:number
  addOfferForm?:FormGroup
  errorMessage?:string;
  offer?:Offer;
  discountValue=0;


  ngOnInit(): void {
    this.offer=new Offer()
    this.offerId = this.activatedRoute.snapshot.params['offerId'];
      console.log("####OfferId: ",this.offerId)
      this.addOfferForm=this.formBuilder.group({
      roomType: ['', [Validators.required]],
      roomSize: ['', [Validators.required]],
      offerName: ['', [Validators.required]],
      offerFromDate: ['', [Validators.required]],
      offerToDate: ['', [Validators.required]],
      offerDetails: ['', [Validators.required]],
      termsAndConditions: ['', [Validators.required]],
      discountPercentage: ['', [Validators.required,Validators.min(0)]],
    })

  }

  addOffer()
  {
    this.offerSerivce.addOffer(this.addOfferForm?.value)
    .subscribe(
      res=>{
        console.log(res);
        console.log("#####Offer Added Successfully!");
      },
      error=>
     {
       window.alert("You have added offer details successfully!")
       this.router.navigate(['offeroperations'])
       console.log("Error in save: "+error)
     }
    )
  }

 
}
