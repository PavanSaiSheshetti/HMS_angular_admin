import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Offer } from 'src/app/model/offer';
import { OfferService } from 'src/app/service/offer.service';

@Component({
  selector: 'app-updateoffers',
  templateUrl: './updateoffers.component.html',
  styleUrls: ['./updateoffers.component.css']
})
export class UpdateoffersComponent implements OnInit {

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

      this.offerSerivce.getOfferById(this.offerId)
      .subscribe(data=>{
        console.log(data)
        this.offer=data
        

      this.addOfferForm=this.formBuilder.group({
      offerId: [this.offer.offerId, [Validators.required]],
      roomType: [this.offer.roomType, [Validators.required]],
      roomSize: [this.offer.roomSize, [Validators.required]],
      offerName: [this.offer.offerName, [Validators.required]],
      offerFromDate: [this.offer.offerFromDate, [Validators.required]],
      offerToDate: [this.offer.offerToDate, [Validators.required]],
      offerDetails: [this.offer.offerDetails, [Validators.required]],
      termsAndConditions: [this.offer.termsAndConditions, [Validators.required]],
      discountPercentage: [this.offer.discountPercentage, [Validators.required,Validators.min(0)]],
      })

  })}

  updateOffer(){
    this.offerSerivce.updateOffer(this.addOfferForm?.value)
    .subscribe(
      response => {
        console.log(response);
        console.log("#######updated successfully ");
      },
      error => {
        window.alert("Your Details are updated successfully!")
        this.router.navigate(['showoffers'])
        console.log("ERROR in save : " + error);
      });
  
}
}
