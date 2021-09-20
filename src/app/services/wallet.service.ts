import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Wallet } from '../models/wallet.class';
import { Observable, throwError } from 'rxjs';
import { retry ,catchError } from 'rxjs/operators';


const walletUrl= "http://localhost:9090/wallet";

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  httpOptions = {
    headers: new HttpHeaders ({
      'Content-Type': 'application/json'
    })
  }
  wallet:Observable<Wallet>;  
  customerUserName:string;

  constructor(public http:HttpClient) { }

  


  getMyWallet(customerUserName:string) :Observable<Wallet>{
    return this.http.get<Wallet>(`${walletUrl}/${customerUserName}/getBalance`,this.httpOptions)
    .pipe(
      retry (1),
      catchError (this.errorHandler)
    );
  }

  
  

  updateMoneyToWallet(customerUserName:string,walletAmount:number):Observable<Wallet>{   
      return this.http.put<Wallet>(`${walletUrl}/updateWallet/${customerUserName}/${walletAmount}`,this.httpOptions)
      .pipe(
        retry(0),
        catchError(this.errorHandler)
      )
  }     
  errorHandler(error: { error: { message: string; }; status: any; message: any; }){
    let errorMessage='';
    if(error.error instanceof ErrorEvent ) {
       errorMessage=error.error.message;
    }else{
        errorMessage=`Error Code:${error.status}\nMessage:${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage)
    }
}
