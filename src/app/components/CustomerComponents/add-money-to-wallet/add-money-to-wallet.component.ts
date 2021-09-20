import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Wallet } from 'src/app/models/wallet.class';
import { WalletService } from 'src/app/services/wallet.service';

@Component({
  selector: 'app-add-money-to-wallet',
  templateUrl: './add-money-to-wallet.component.html',
  styleUrls: ['./add-money-to-wallet.component.css']
})
export class AddMoneyToWalletComponent implements OnInit {
  wallet?:Wallet;
  customerUserName?:string;
  walletAmount?:number;
  walletForm?:FormGroup;
  totalAmount?:Wallet;

  constructor(public router:Router , public formBuilder:FormBuilder,public walletService:WalletService) { }

  ngOnInit(): void {
    
    this.wallet = new Wallet();
    // this.customerUserName = this.activatedRoute.snapshot.params['doctorId'];
    this.customerUserName="Jayant"
    if (this.customerUserName !=null) {
      this.walletForm = this.formBuilder.group({
        walletAmount:['',[Validators.required, Validators.min(1)]],       
      })
    }

    this.refresh();
   
  }

  addMoney(){
      this.walletAmount=this.walletForm.get('walletAmount').value;            
      this.walletService.updateMoneyToWallet(this.customerUserName,this.walletAmount)
      .subscribe(
        response => {
          console.log(response);
          // console.log(this.customerUserName);
          // console.log(this.walletForm.value);
          // console.log("#######Saved successfully ");
          // this.router.navigate(['doctor-login'])
        },
        error => {
          // console.log(error);
          console.log(this.customerUserName);
          console.log(this.walletForm.value);
          console.log("#######Saved successfully ");
          this.router.navigate(['wallet'])

        }
      )

    }


    refresh(){
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
    
  
