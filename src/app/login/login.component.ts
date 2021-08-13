import { Component, OnInit } from '@angular/core';
import axios from 'axios';
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
       
       let url ="https://product-mock-api.herokuapp.com/flightapp/api/v1/auth/login";
       let formData = {          
        username: this.username,          
        password: this.password
        }
        axios.post(url, formData).then(res=>{            
          let data = res.data;
          console.log(data);
          alert("Successffully Login");
          this.passing_username();          
          window.location.href = "homepage"
      }).catch(err=>{
          let errorMessage = err.response.data.errorMessage;
          console.error(errorMessage);
          alert("Error-" + errorMessage);
      });
       
     }
   }
   passing_username(){
     let userName_data = {
       username: this.username
     }
     console.log(userName_data);
     localStorage.setItem('user',JSON.stringify(userName_data));
     
   }
}
