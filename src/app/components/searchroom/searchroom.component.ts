import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Room } from 'src/app/model/room';
import { AddroomService } from 'src/app/services/addroom.service';

@Component({
  selector: 'app-searchroom',
  templateUrl: './searchroom.component.html',
  styleUrls: ['./searchroom.component.css']
})
export class SearchroomComponent implements OnInit {
 
  show?:boolean;
  showTextBox?:boolean;
  rooms: Room[] = [] ;
  room?:Room;
  viewRoom?:boolean;
  searchRoomForm=new FormGroup
  ({
    roomId:new FormControl('',[Validators.required])
  })
  constructor(public router:Router,public addRoomService:AddroomService) { }

  ngOnInit(): void {
    this.searchRoom();
  }
  
  searchRoom(){
    this.showTextBox=true
    this.show=false
    this.viewRoom=false
   }
  

  searchRoomById(){
    
    this.addRoomService.getRoomById(this.searchRoomForm.get('roomId')?.value).subscribe(
      res=>{
        /* this.room=res
        this.showTextBox=false
        this.show=false
        this.viewRoom=true */
        if(res==null){
          window.alert("Room is not available for given RoomId! check it and try again...")
          this.showTextBox=false
          this.show=false
          this.viewRoom=false
          this.router.navigate(['adminFunc'])

        }
        else{
        this.room=res
        this.showTextBox=false
        this.show=false
        this.viewRoom=true
        }
      }
    )
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
viewRooms(){
  this.addRoomService.getAllRooms().subscribe(
    (res:any)=>{
      this.show=true
      this.showTextBox=false
      this.viewRoom=false
      this.rooms=res
      console.log(res);
     console.log(res);
     
     
   }
  )}

return(){
  this.router.navigate(['adminFunc'])
}
}
