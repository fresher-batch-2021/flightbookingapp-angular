import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  username:string = "";
  password:string = "";
   login(){
     if(this.username==""){
       alert("username cannot be blank")
      
     }else if(this.password.length < 8){
       alert("password must be greater than 8 character")
     }else{
       alert("sucessfully Registered")
       window.location.href = "home"
     }
   }

}
