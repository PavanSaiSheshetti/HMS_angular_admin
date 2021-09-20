import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReceptionService } from 'src/app/services/reception.service';

@Component({
  selector: 'app-receptionist-forgetpassword',
  templateUrl: './receptionist-forgetpassword.component.html',
  styleUrls: ['./receptionist-forgetpassword.component.css']
})
export class ReceptionistForgetpasswordComponent implements OnInit {
  successMessage: any;
  errorMessage: any;
  receptionistForgetPassword: FormGroup
  receptionistEmail?: string;
  constructor(private formBuilder: FormBuilder, public router: Router, public receptionService: ReceptionService) { }

  ngOnInit(): void {
    this.receptionistForgetPassword = this.formBuilder.group({
      receptionistEmail:['',[Validators.required]],
    })
  }
forgetPassword(){
    this.receptionService.getReceptionistByEmailId(this.receptionistForgetPassword.get('receptionistEmail')?.value)
      .subscribe(
        response => {
          if(response!=null){
            this.successMessage ="Your password is sent to the entered mailId successfully"
            console.log(this.receptionistForgetPassword.get('receptionistEmail')?.value);
            console.log(this.successMessage)
            window.alert("Password has been sent to your Email")
          this.router.navigate(['receptionistlogin',this.receptionistForgetPassword.get('receptionistEmail')?.value])
                }
           else{
            console.log(this.receptionistForgetPassword.get('receptionistEmail')?.value +" check your details");
            window.alert("Sorry entered mailId cant be found!")
           }},
        error => {
          this.errorMessage="Sorry entered mailId cant be found!"
          console.log(error)
        });
  }
  
  return(){
    this.router.navigate(['receptionistlogin'])
  }
}
