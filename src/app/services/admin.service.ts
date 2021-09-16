import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Receptionist } from '../models/receptionist';
import { retry, catchError } from 'rxjs/operators';
import { Admin } from '../models/admin';

const adminUrl = "http://localhost:9090/adminController"

@Injectable({
  providedIn: 'root'
})

export class AdminService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  constructor(public httpClient : HttpClient) { }

  addReceptionist(receptionist: Receptionist): Observable<Receptionist> {
    return this.httpClient.post<Receptionist>(`${adminUrl}/addReceptionist`, receptionist, this.httpOptions)
      .pipe(
        retry(0),
        catchError(this.errorHandler)
      )
  }

  errorHandler(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
  
}

