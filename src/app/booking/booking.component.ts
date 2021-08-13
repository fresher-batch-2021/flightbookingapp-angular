import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
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
  passenger_details(){
    
    window.location.href = "passenger_details"
  }
}
