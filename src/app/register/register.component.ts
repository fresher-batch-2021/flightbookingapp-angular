import { Component, OnInit } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name:string = "";
  mobile_number:string = "";
  email:string = "";
  user_name:string = "";
  password:string = "";
  confirm_password:string = "";

  register_details(){
    if(this.name=="" || this.name == null){
      alert("Invalid Name");    
    }
    else if(this.mobile_number == "" || this.mobile_number == null || this.mobile_number.length !=10){
      alert("invalid Number");      
    }
    else if(this.email == "" || this.email == null){
      alert("invalid Email Id");     
    }
    else if(this.user_name == "" || this.user_name == null){
      alert("Invaild User name");     
    }
    else if(this.password == ""){
      alert("Invaild Password");      
    }
    else if(this.confirm_password == ""){
      alert("Invaild Confirm Password");
    }
    else if(this.password != this.confirm_password){
      alert("Password does't match");      
    }      
    else{
      
      let url ="https://product-mock-api.herokuapp.com/flightapp/api/v1/auth/register";
      let formData ={
        name: this.name,
        mobilenumber:this.mobile_number,
        email:this.email,
        username:this.user_name,
        password:this.password,
        confirm_password: this.confirm_password
    };
    axios.post(url, formData).then(res=>{            
        let data = res.data;
        console.log(data);
        alert("Successffully Register");
        window.location.href = "login"
    }).catch(err=>{
        console.error(err);
        alert("Unable to register");
    });
      
    }
  }
}
