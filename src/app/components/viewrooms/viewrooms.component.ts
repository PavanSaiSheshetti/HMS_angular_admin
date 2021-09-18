import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Room } from 'src/app/models/room';
import { AddroomService } from 'src/app/services/addroom.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-viewrooms',
  templateUrl: './viewrooms.component.html',
  styleUrls: ['./viewrooms.component.css']
})
export class ViewroomsComponent implements OnInit {

  rooms: Room[] = [] ;
  show?:boolean;
  constructor(public router:Router,public addRoomService:AddroomService) { }

  ngOnInit(): void {
    
      this.viewRooms();
  }
 
  
  

    editRoom(roomId:number){
      this.router.navigate(['editRoom',roomId])
    }
  deleteRoom(roomId:number){
    this.addRoomService.deleteRoom(roomId).subscribe(
      (res:any)=>{
          this.viewRooms()
        });
  }
  viewRooms() {
    this.addRoomService.getAllRooms().subscribe(
      (res:any)=>{
       this.show=true
        this.rooms=res
        console.log(res);
       console.log(res);
       
       
     }
    )}  
  
  
  return(){
    this.router.navigate(['adminFunc'])
  }
  searchRoom(){
    this.router.navigate(['searchroom'])
  }
  alertConfirmation(roomId:number){
    Swal.fire({
      title: 'Are you sure?',
      text: 'This process is irreversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, go ahead.',
      cancelButtonText: 'No, let me think'
    }).then((result) => {
      if (result.value) {
        this.deleteRoom(roomId)
        Swal.fire(
          'Removed!',
          'Room removed successfully!',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Room Not Deleted!!',
          'error'
        )
      }
    })
  }  
}





