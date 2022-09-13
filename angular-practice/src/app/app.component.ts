import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-practice';
  user :any  = {name:'Arbaz khan'};
  isPonySelected:any
  foreground:any
  userName:any=[]
  onButtonclick(event: any){
    console.log(event)

    this.userName=[{name:"Arbaz khan"}]
    console.log(this.userName)

  }
 
}
 