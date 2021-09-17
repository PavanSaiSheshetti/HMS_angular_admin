import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Offer } from 'src/app/models/offer';
import { OfferService } from 'src/app/services/offer.service';


@Component({
  selector: 'app-searchoffer',
  templateUrl: './searchoffer.component.html',
  styleUrls: ['./searchoffer.component.css']
})
export class SearchofferComponent implements OnInit {

 
  show?:boolean;
  showTextBox?:boolean;
  offer:Offer[]=[];
  viewOffer?:boolean;
  searchOfferForm?:FormGroup
  successMessage?:string
  errorMessage?:string;
  constructor(public router:Router,public offerService:OfferService,public formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.searchOffer();
    this.searchOfferForm=this.formBuilder.group({
      roomType: ['', [Validators.required]]
    })
  }
  searchOffer(){
    this.showTextBox=true
    this.show=false
    this.viewOffer=false
   }

   searchOfferById(){
    
    this.offerService.getOfferByRoomType(this.searchOfferForm.get('roomType')?.value).subscribe((data:any[])=>{
          console.log("####Getting all offers from DB through Spring..")
          console.log(data);
          this.offer=data;
        },err=>this.errorMessage=err)
      
        this.showTextBox=false
        this.show=false
        this.viewOffer=true
        console.log(this.offer)
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

            this.router.navigate(['offeroperations'])
            window.alert("offer Id: "+offerId+"Deleted Successfully!!")
            this.show=false
            this.viewOffer=false
            console.log(error);
          });
          this.successMessage = "Offer Id: "+offerId +" :   successfully deleted"
  }

  editOffer(offerId:number)
  {
    this.router.navigate(['updateoffers',offerId])
  }
}
