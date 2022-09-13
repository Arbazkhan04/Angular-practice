import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validator, Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  login=new FormGroup({
    userName:new FormControl('',[Validators.required]),
    userPassword:new FormControl('',[Validators.required]),
  })
  register()
  {
    console.log(this.login.value)
    
  }
 
  
  constructor( private toastr:ToastrService) { 
    
  }

  ngOnInit(): void {
  }
  get userName()
  {
    return this.login.get('userName')
  }
  get userPassword(){
    return this.login.get('userPassword')
    

  }
  toastr2(){
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

}
