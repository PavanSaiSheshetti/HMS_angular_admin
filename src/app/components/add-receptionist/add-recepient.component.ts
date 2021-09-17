import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-add-recepient',
  templateUrl: './add-recepient.component.html',
  styleUrls: ['./add-recepient.component.css']
})
export class AddRecepientComponent implements OnInit {

  errorMessage?: string;
  successMessage?: string;
  receptionistId? : Number;
  password?:String;
  Id?:number;
  ReceptionistForm : FormGroup;

  constructor(public formBuilder:FormBuilder,public router: Router,public activatedRoute: ActivatedRoute, public adminService : AdminService) { }

  ngOnInit(): void {
    this.Id = this.activatedRoute.snapshot.params['Id'];
    this.receptionistId= this.receptionistId;
    this.ReceptionistForm = this.formBuilder.group({
      receptionistName : ['', [Validators.required, Validators.minLength(5)]],
      receptionistPhoneNumber : ['', [Validators.required,Validators.minLength(10)]],
      receptionistEmail : ['', [Validators.required]],
      receptionistAge : ['', [Validators.required]],
      address  : ['', [Validators.required]],
      experience : ['', [Validators.required]],
      salary : ['', [Validators.required]]
    });
    this.password= this.password;
  }


  addReceptionist(){
    this.adminService.addReceptionist(this.ReceptionistForm.value)
        .subscribe(
          response => {
            console.log(response);
            this.  errorMessage= "Receptionist not Added successfully";
            console.log("#######Receptionist added successfully ");
          },
          error => {
            this.successMessage = "Receptionist Added successfully";
            
          });
  }

  back()
  {  
    this.router.navigate([""])
  }

}
