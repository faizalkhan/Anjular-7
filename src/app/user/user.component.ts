import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms'


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  myName = "my name is faizal";
  innerhtmlValue = "<h2> Hello Dude </h2>";
  profile;
  userForm: any

  constructor() {
    this.userForm = new FormGroup(
      {
        'name': new FormControl("", Validators.required),
        'email': new FormControl("Enter Your E-Mail", [Validators.required, Validators.email]),
        'gender': new FormControl("Male",Validators.required ),
        'FavFood': new FormArray([
          new FormGroup(
            {
              'indian': new FormControl(true, Validators.required),
            }),
          new FormGroup(
            {
              'chinese': new FormControl(false, Validators.required)
            }),
        ]),

        'addresses': new FormArray([
          this.createnewaddress()      
        ])

      })
  }
  
  submitForm(){
    if(this.userForm.valid)
    {
      console.log(this.userForm.value);
      console.log(this.userForm.value.name);
    }
   
  }
  createnewaddress()
  {
     return new FormGroup({
      'line1': new FormControl("", Validators.required),
      'line2': new FormControl("", Validators.required),
      'country': new FormControl("", Validators.required),
      'state': new FormControl("", Validators.required),
      'city': new FormControl("", Validators.required)
    })
  }

 addaddress()
 {
 this.userForm.get('addresses').push(this.createnewaddress()); 
 }
 removeaddress(index)
 {
  alert(index);
  this.userForm.get('addresses').removeAt(this.createnewaddress()); 
 }
  ngOnInit() {
  }

  submit() {
    alert("hi");
    this.profile = "value changes from class";
    return false;
  }

}
