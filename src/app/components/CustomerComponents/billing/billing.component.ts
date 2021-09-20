import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {

  paymentForm : FormGroup; 
  errorMessage?: string;
  successMessage?: string;
  Id?:number;
  // public activatedRoute:ActivatedRoute
  // this.Id = this.activatedRoute.snapshot.params['id'];
  
  // bills : Bill[]

  @ViewChild('htmlData') htmlData:ElementRef;
  USERS = [
    {
      "Bill": 12000,
      "Id": "Loki18",
      "Medicines": "PCM",
      "Surgery": 2311111,
      "Appointment": 90,
      "Doctor": 0,
      "HospitalCharges": "Your Whole property",
      "OtherCharges": "And Kidney too",


    }
    // {
    //   "id": 2,
    //   "name": "Ervin Howell",
    //   "email": "shanna@melissa.tv",
    //   "phone": "010-692-6593 x09125"
    // }
    // // {
    //   "id": 3,
    //   "name": "Clementine Bauch",
    //   "email": "nathan@yesenia.net",
    //   "phone": "1-463-123-4447",
    // },
    // {
    //   "id": 4,
    //   "name": "Patricia Lebsack",
    //   "email": "julianne@kory.org",
    //   "phone": "493-170-9623 x156"
    // },
    // {
    //   "id": 5,
    //   "name": "Chelsey Dietrich",
    //   "email": "lucio@annie.ca",
    //   "phone": "(254)954-1289"
    // },
    // {
    //   "id": 6,
    //   "name": "Mrs. Dennis",
    //   "email": "karley@jasper.info",
    //   "phone": "1-477-935-8478 x6430"
    // }
  ];
  constructor(public customerService: CustomerService, public router: Router,public activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.Id = this.activatedRoute.snapshot.params['id'];
    this.viewBillHistory();
  }

  viewBillHistory(){
    // this.customerService.viewBill(this.Id).subscribe((data: any[])=>{
    //   console.log("###Biils recieved from spring :")
    //   console.log(data);
    //   // this.bills = data;
  //   },err => this.errorMessage = err) 
  }
  Back(){

    // this.router.navigate(["patientDashBoard", this.Id]);

  }
  PaymentDone(){
    
  }

//  public invoiceDetails(): void{
//     let DATA = document.getElementById('htmlData');
      
//     html2canvas(DATA).then(canvas => {
        
//         let fileWidth = 208;
//         let fileHeight = canvas.height * fileWidth / canvas.width;
        
//         const FILEURI = canvas.toDataURL('image/png')
//         let PDF = new jsPDF('p', 'mm', 'a4');
//         let position = 0;
//         PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)
        
//         PDF.save('angular-demo.pdf');
//     });     

//   }

public openPDF():void {
  let DATA = document.getElementById('htmlData');
    
  html2canvas(DATA).then(canvas => {
      
      let fileWidth = 208;
      let fileHeight = canvas.height * fileWidth / canvas.width;
      
      const FILEURI = canvas.toDataURL('image/png')
      var PDF = new jsPDF('p','mm','a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)

      PDF.save('Invoice.pdf');
  });     
}
}
