import { Component, OnInit } from '@angular/core';
import { user } from './user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent  {
    user! : user[]
  constructor() { 
    this.user=[
      new user(1,'Arbaz khan','lahore','developer'),
      new user(2,'umer','lahore','Flutter Developer'),
      new user(3,'Sabir shah','lahore','Medical'),
      new user(4,'Mughaira','lahore','walay')
      
      
    ]
    console.log(this.user)
  }


}
