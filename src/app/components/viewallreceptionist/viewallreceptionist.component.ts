import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Receptionist } from 'src/app/models/receptionist';
import { ReceptionistService } from 'src/app/services/receptionist.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-viewallreceptionist',
  templateUrl: './viewallreceptionist.component.html',
  styleUrls: ['./viewallreceptionist.component.css']
})
export class ViewallreceptionistComponent implements OnInit {
  successMessage?: string;
  errorMessage ?:string;
  showrec?:boolean;
  show?:boolean;
  showid?:boolean;
  receptionistForm = new FormGroup({});

 
  // receptionists: Receptionist[] = [];
 receptionists:Observable<Receptionist[]>|any

  constructor(public receptionistService:ReceptionistService,public router:Router,
   public formBuilder:FormBuilder){}
  ngOnInit(): void {
    this.viewReceptionists()
    this.showrec =true;
    
    this.receptionistForm = this.formBuilder.group({
     
      receptionistId: ['', [Validators.required]],
      })
  }
  viewReceptionists(){

    this.receptionistService.getAllReceptionists().subscribe(
      (res:any[])=>{
        this.show=true
        this.receptionists=res
        this.showrec=false;
        this.showid=false
        console.log(res);
      }
    )}
    edit(receptionistId:number){
      this.router.navigate(['editrec',receptionistId])
    }
    delete(receptionistId : number){
      this.receptionistService.deleteReceptionistId(receptionistId).subscribe(response => {
        console.log(response);
        console.log("#######deleted successfully ");
       
        this.viewReceptionists();
      
        
      
      },
      error => {
        this.refresh();
        
       
        console.log(error);
      });
      this.successMessage = receptionistId +" :   successfully deleted"
    }
    refresh(){
      this.receptionistService.getAllReceptionists().subscribe(
        (res:any[])=>{
          this.show=true
          this.receptionists=res
          this.showrec=false;
          this.showid=false
          console.log(res);
        }
      )
  }
  
  back(){
    this.router.navigate(['receptionist'])
  }
    
  alertConfirmation(receptionistId:number){
    Swal.fire({
      title: 'Are you sure want to delete?',
      text: 'Your Action cannot be rollback.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, go ahead.',
      cancelButtonText: 'No, let me think again'
    }).then((result) => {
      if (result.value) {
        this.delete(receptionistId)
        Swal.fire(
          'Done!',
          'Action performed successfully.',
          'success'
        )
        this.refresh();
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Record not deleted.)',
          'error'
        )
      }
    })
  }  
}

