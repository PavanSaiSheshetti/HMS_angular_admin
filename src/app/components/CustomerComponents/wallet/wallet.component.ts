import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Wallet } from 'src/app/models/wallet.class';
import { WalletService } from 'src/app/services/wallet.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  constructor(public router:Router,public walletService:WalletService) { }
 
   
  customerUserName:string;
  totalAmount?:Wallet;

  ngOnInit():void{
    this.customerUserName="Jayant";
    this.walletService.getMyWallet(this.customerUserName)    
    .subscribe(
      data => {
        console.log(data);
        this.totalAmount=data;
        // console.log("#######Updated successfully ");
        // this.router.navigate(['doctor-login'])
      });
  
   
  }

}
