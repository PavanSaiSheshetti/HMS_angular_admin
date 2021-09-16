import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Receptionist } from 'src/app/models/receptionist';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-update-receptionist',
  templateUrl: './update-receptionist.component.html',
  styleUrls: ['./update-receptionist.component.css']
})
export class UpdateReceptionistComponent implements OnInit {

  errorMessage : string = "";
  successMessage : string = "";
  ReceptionistUpdateForm : FormGroup;

  receptionistId?: number;
  receptionist: Receptionist;

  constructor(public formBuilder:FormBuilder,public router: Router,public activatedRoute: ActivatedRoute, public adminService : AdminService) { }

  ngOnInit(): void 
  {
    this.adminService.getReceptionistById(this.receptionistId)
    .subscribe(data => {
      console.log(data),
        this.receptionist = data
        this.ReceptionistUpdateForm = this.formBuilder.group({
          receptionisId: [this.receptionist.receptionistId],
          receptionistName : [this.receptionist.receptionistName, [Validators.required, Validators.minLength(5)]],
          receptionistPhoneNumber : [this.receptionist.receptionistPhoneNumber, [Validators.required,Validators.minLength(10)]],
          receptionistEmail : [this.receptionist.receptionistEmail, [Validators.required]],
          receptionistpassword : [this.receptionist.receptionistPassword]
        });  
    },
      error => console.log(error)
    )
  }

  updateReceptionist(){
    this.adminService.updateReceptionist(this.ReceptionistUpdateForm.value)
        .subscribe(
          response => {
            console.log(response);
            this.successMessage = "Receptionist updated successfully";
            console.log("#######Receptionist updated successfully ");
          },
          error => {
            this.errorMessage = "Not able to update a Receptionist"
            console.log("ERROR in updating Receptionist : " + error);
          });
  }

  back()
  {  
    this.router.navigate([""])
  }


}
