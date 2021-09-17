import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Room } from 'src/app/model/room';
import { AddroomService } from 'src/app/services/addroom.service';

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
        
        window.alert("You have deleted the room with Id:"+roomId)
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
    this.router.navigate([''])
  }
  searchRoom(){
    this.router.navigate(['searchroom'])
  }

}





