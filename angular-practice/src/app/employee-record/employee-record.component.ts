import { Component, OnInit } from '@angular/core';
import {DetailsService} from '../shared/details.service'

@Component({
  selector: 'app-employee-record',
  templateUrl: './employee-record.component.html',
  styleUrls: ['./employee-record.component.css'],
  providers:[DetailsService]
})
export class EmployeeRecordComponent implements OnInit {
  recievedInfo1: string[] = [];
  recievedInfo2 : string[]=[];
  recievedInfo3 : string[]=[];
  recievedInfo4 : string[]=[];
  constructor( private details : DetailsService) { }

  ngOnInit(): void {
  }
  recievedInfo1FromDetailService(){
   return this.recievedInfo1=this.details.getInfo1();
  }
  recievedInfo2FromDetailsService(){
    return this.recievedInfo2=this.details.getInfo2()
  }
  recievedInfo3FromDetailsService(){
    return this.recievedInfo3=this.details.getInfo3()
  }
  recievedInfo4FromDetailsService(){
    return this.recievedInfo4=this.details.getInfo4()
  }

}
