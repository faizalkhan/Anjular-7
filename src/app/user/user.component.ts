import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

   myName = "my name is faizal";
   innerhtmlValue = "<h2> Hello Dude </h2>";
  profile;
  constructor() { }

  ngOnInit() {
  }
 
  submit() {
    alert("hi");
    this.profile ="value changes from class";
    return false;
  }

}
