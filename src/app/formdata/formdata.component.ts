import { Component } from '@angular/core';

@Component({
  selector: 'app-formdata',
  templateUrl: './formdata.component.html',
  styleUrls: ['./formdata.component.css']
})
export class FormdataComponent {
   

  name : string;
  email : string;
  address : string;

  userArray: Array<any> = [];

 

  onClick(){
    this.userArray.push({
      "name": this.name,
      "email": this.email,
      "address": this.address
    })
  }
  
  onDelete(index: number){
    this.userArray.splice(index, 1);
  }

  // listArray: Array<any> = [{
  //   "name": 'Rohit',
  //   "designation": 'Front-End Developer',
  //   "email": "rohit@fluid.live"
    
  // }];
  myObj: Object = {
    "name": 'Rohit',
    "designation": 'Front-End Developer',
    "email": "rohit@fluid.live"
    
  };

  constructor(){}

  ngOnInit(): void{}

}

