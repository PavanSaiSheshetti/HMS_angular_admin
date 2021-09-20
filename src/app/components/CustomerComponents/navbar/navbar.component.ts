import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  display = false;
  userName?:String;
  room:String;
  // public activatedRoute:ActivatedRoute
  // this.userName = this.activatedRoute.snapshot.params['userName'];
  constructor(public router : Router,  public activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.userName = this.activatedRoute.snapshot.params['userName'];
    if(this.userName == "-1"){
      this.display = false;
    }
    else{
      this.display = true;
    }
    
  }

  billing(){
    this.router.navigate(['billing']);
  }

  home(){

    if(this.userName == "-1"){
      this.router.navigate(["customerLogin", "-1"]);
    }
    else{
      console.log(this.userName)
      this.router.navigate(["navbar", this.userName]);
      this.router.navigate(["customerDashboard", this.userName]);
    }
    
  }
  customerdashboard(){
    
  }
  rooms(){
    
    this.router.navigate(["navbar", this.userName]);
    this.router.navigate(["rooms", this.userName]);
  }

  logout(){
    this.router.navigate(["customerLogin", "-1"]);
  }
  edit(){
    this.router.navigate(["editCustomer", this.userName]);
  }
  about(){
    this.router.navigate(["about", this.userName]);
  }
  contact(){
    this.router.navigate(["contactUs", this.userName]);
  }

}
