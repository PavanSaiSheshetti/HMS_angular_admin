import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  errorMessage?: string;
  successMessage?: string;
  adminForm : FormGroup;

  id?:String = "";
  password?:String ="";

  constructor(public formBuilder:FormBuilder,public router: Router,public activatedRoute: ActivatedRoute, public adminService : AdminService) { }

  ngOnInit(): void 
  {
    this.adminForm = this.formBuilder.group({
      adminId : ['', [Validators.required]],
      adminpassword : ['', [Validators.required]]
    });
  }


  adminLogin(){
    console.log(this.adminForm.value)
      this.adminService.adminLogin( this.adminForm.get('adminId').value,this.adminForm.get('adminpassword').value)
          .subscribe(
            response => {
              console.log(response);
              this.successMessage = "Login Successfully";
              console.log("Admin Login Successfully");
            },
            error => {
              this.errorMessage = "AdminId / Password is incorrect";
              console.log("AdminId / Password is incorrect : " + error);
            });
  }

  back()
  {  
    this.router.navigate([""])
  }
  
}
