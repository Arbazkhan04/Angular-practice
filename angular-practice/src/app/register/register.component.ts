import { HttpClient } from '@angular/common/http';
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
    userUniqueKey:new FormControl('',[Validators.required])
  })
  register()
  {
    console.log(this.login.value)
    const post= this.login.value;
    this.http.post('https://angular-httpmodule-5c891-default-rtdb.firebaseio.com/posts.json',post).subscribe(Response=>{
     console.log(Response);
     
    })
    
  }
 
  
  constructor( private toastr:ToastrService,private http:HttpClient) { 
    
  }

  ngOnInit(): void {
    
     const post= this.login.value;
     this.http.post('https://angular-httpmodule-5c891-default-rtdb.firebaseio.com/posts.json',post).subscribe(Response=>{
      console.log(Response);
      // we need to subscibe this http.post method because this is an observable 
     })

  }
  get userName()
  {
    return this.login.get('userName')
  }
  get userPassword(){
    return this.login.get('userPassword')
    

  }
  toastr2(){
    if(this.login.valid)
    this.toastr.success('You have login successfully');
  }



}
