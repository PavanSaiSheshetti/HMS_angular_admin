import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-customer-billing',
  templateUrl: './customer-billing.component.html',
  styleUrls: ['./customer-billing.component.css']
})
export class CustomerBillingComponent implements OnInit {

  paymentForm : FormGroup;
  errorMessage?: string;
  successMessage?: string;
  Id?:number;
  userName?:String;

  
  @ViewChild('htmlData') htmlData:ElementRef;
  USERS = [
    {
      "Bill No ": 12000,
      "User Name": "Loki18",
      "Room Bill": "PCM",
      "Breakfast Bill": 2311111,
      "Drinks Bill": 90,
      "Food Bill": 0,
      "Pickup And Drop Bill": "Your Whole property",
      "Total Bill": "And Kidney too",


    }

  ];
  constructor(public customerService: CustomerService, public router: Router,public activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.userName = this.activatedRoute.snapshot.params['userName'];
    this.viewBillHistory();
  }

  viewBillHistory(){

  }
  Back(){

    this.router.navigate(["customerDashboard", this.userName]);

  }
  PaymentDone(){

  }



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
