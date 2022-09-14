import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  info1 : string[] = [
   'Arbaz khan','e1' , 'lahore', 'pakistan'
  ]
  info2 : string[] = [
   'umar khan','e2' , 'lahore', 'pakistan'
  ]
  info3 : string[] = [
   'Mughaira khan','e3' , 'lahore', 'pakistan'
  ]
  info4  : string[] = [
   'Umair khan' ,'e4' , 'lahore', 'pakistan'
  ]
  getInfo1() :string[]{
    return this.info1;
  }
  getInfo2() :string[]{
    return this.info2;
  }
  getInfo3() :string[]{
    return this.info3;
  }
  getInfo4() :string[]{
    return this.info4;
  }
  

  constructor() { }
}
