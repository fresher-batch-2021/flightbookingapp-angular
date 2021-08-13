import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-passenger-details',
  templateUrl: './passenger-details.component.html',
  styleUrls: ['./passenger-details.component.css']
})
export class PassengerDetailsComponent implements OnInit {
  userName : any;
  constructor() { }

  ngOnInit(): void {
    this.passing_data();
  }
  passing_data(){
    let user_details = (localStorage.getItem('user'));
    const data =user_details != null ? JSON.parse(user_details) : [];
    console.log(data);
    console.log(data.username);
    this.userName = data.username;        
    
  }
  
}
