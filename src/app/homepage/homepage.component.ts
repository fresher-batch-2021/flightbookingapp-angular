import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  userName : any;

  constructor() { }

  ngOnInit(): void {
    this.passing_data();
  }
  
    
  data:any;
  passing_data(){
    let user_details = (localStorage.getItem('user'));
    const data =user_details != null ? JSON.parse(user_details) : [];
    console.log(data);
    console.log(data.username);
    this.userName = data.username;        
    
  }
  next_page(){
    window.location.href = "booking"
  }
}
