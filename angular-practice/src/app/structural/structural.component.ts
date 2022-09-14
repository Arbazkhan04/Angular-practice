import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.css']
})
export class StructuralComponent implements OnInit {
[x: string]: any;
    races : Array<any> = [
      {name:'khan'},{name:'umar'}
    ];
foreground: any;
  constructor() { }

  ngOnInit(): void {
  }
 
}
