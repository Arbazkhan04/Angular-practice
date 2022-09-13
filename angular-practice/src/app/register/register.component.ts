import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormControlName} from '@angular/forms';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  login=new FormGroup({
    userName:new FormControl(''),
    userPassword:new FormControl('')
  })
  register()
  {
    console.log(this.login.value)
    
  }
 
  
  constructor() { 
    
  }

  ngOnInit(): void {
  }
  

}
