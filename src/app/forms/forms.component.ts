import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  constructor() { }

  appname ="cool";

  btnclick = false;
  activeFlag = false;

  handleme()
  {
    this.btnclick =true;
  }
  myStyles = {
    'background-color' :  'red',
    'font-size' : '35px'
  }
  setmyStyles()
  {
    let myStyles = {
      'background-color' :  'blue',
      'font-size' : '45px'
    }
    return myStyles;
  }


  getclasses(flag:string)
  {
    let cssclass

      if(flag=='nightmode')
     {
       cssclass = {
        'one' : true,
        'two' : false
      }
    }
    else
    {
      cssclass = {
        'three' : true,
        'four' : true
      }
       return cssclass;
    }



      }
 
      getColor(country)
      { 
            switch(country)
            {
             case 'India' :
             return 'green';
             case 'USA' :
                return 'blue';
             case 'UK' :
                    return 'red';
            }
      }
      people:any [] = [
       
        {
          "name" : "John",
          "country" : "India"
        },
        {
          "name" : "Robert",
          "country" : "UK"
        },
        {
          "name" : "James",
          "country" : "US"
        },
        {
          "name" : "Vasanth",
          "country" : "USA"
        }
      ]


collectstyle()
{
  return {
     'btn': true,
    'btn-primary': true,
    'btn-extra-class': this.activeFlag
}
}
toggleclass()
{
  console.log('toggle');
  this.activeFlag =  !this.activeFlag;
}
  ngOnInit() {
  }

isValid = true;

ids = [1,2,3,4];	

myNumEnum = NumEnum;

emp1 =  new employee(1 , "ArunR Raja");
emp2: employee;

DisplayName = false;
DisplayNames = false;

}








export enum NumEnum {
ONE = 1,
TWO = 2,
THREE = 3
} 

export class employee {
  constructor(public id:number, public name:string) {

  }
}


