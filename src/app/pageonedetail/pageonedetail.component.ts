import { DatePipe } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SetMonth } from '../model/setMonth';
@Component({
  selector: 'app-pageonedetail',
  templateUrl: './pageonedetail.component.html',
  styleUrls: ['./pageonedetail.component.css']
})
export class PageonedetailComponent implements OnInit {

  monthModel:any;
  getSepMonthData:any;
  selectedDate:any;
  replaceLasttwocharacter:any;
  selectedYear:any;
  monthCount:any;
  selectedMonth:any;
  valueName:any;
  valueNameN:any;
  isShow = false;
  isShow1 = false;
  countryDetails = [
         {
           country: "India",
           capital: "Delhi",
           weatherTmp: "35.7"
         },
         {
          country: "Sri Lanka",
          capital: "Colombo",
          weatherTmp: "32.7"
        },
        {
          country: "Bangla Desh",
          capital: "Dhaka",
          weatherTmp: "39.7"
        }
    ];
  nameString = '';
  employees = [
    {
      firstName: 'Rohit',
      lastName: 'Sharma',
      dept: 'Finance',
      salary: 5000,
      doj: new Date('2012-04-22')
    },
    {
      firstName: 'Aditi',
      lastName: 'Mishra',
      dept: 'Sales',
      salary: 6000,
      doj: new Date('2016-09-16')
    },
    {
      firstName: 'Dipti',
      lastName: 'Singh',
      dept: 'IT',
      salary: 10000,
      doj: new Date('2021-09-03')
    }
  ]

  constructor(private router: Router) { 
    const currentState = this.router.getCurrentNavigation();
    //return currentState.extras.state;
    if(currentState?.extras.state && currentState?.extras.state['date']){
      var str = currentState?.extras.state['date'];
      this.selectedDate = str.day; 
      this.selectedMonth = str.month;
      this.selectedYear = str.year;
    };

    // if(str === undefined){
    //   console.log("STR::-",str);
    //   this.getSepMonthData = sessionStorage.getItem("strModel");
    //   const finalSepMonthData = JSON.parse(this.getSepMonthData);
    //   console.log("STR::-",str);
    //   this.selectedDate = finalSepMonthData.day;
    //   this.selectedMonth = finalSepMonthData.month;
    //   this.selectedYear = finalSepMonthData.year;
    // }
    // else{
    // console.log("STR::-",str);
    // sessionStorage.setItem("strModel",JSON.stringify(str));
    // this.selectedDate = str.day;
    // this.selectedMonth = str.month;
    // this.selectedYear = str.year;
    // var theMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    //   for(var i = 0; i < theMonths.length;i++){
    //     if(theMonths[i].toLowerCase() === this.selectedMonth){
    //       this.monthCount = parseInt(i.toString()) +1;
    //     }
    //   }

    // this.replaceLasttwocharacter = this.selectedDate.substring(0,this.selectedDate.length - 2);
    // let convertedDt = this.selectedYear + "-" + this.monthCount + "-" + this.replaceLasttwocharacter;
    // let Today = new Date(convertedDt);
    // console.log("convertedDt::--",new DatePipe('en-us').transform(Today,'yyyy-MM-dd'));
    // }
  }

  ngOnInit(): void {
    this.monthModel = window.history.state[0];
    if(this.monthModel === undefined){
      this.getSepMonthData = sessionStorage.getItem("monthModel");
      const finalSepMonthData = JSON.parse(this.getSepMonthData);
      console.log("finalSepMonthData::-",finalSepMonthData);
      this.selectedDate = finalSepMonthData.day;
      this.selectedMonth = finalSepMonthData.month;
      this.selectedYear = finalSepMonthData.year;
    }
    else{
      sessionStorage.setItem("monthModel",JSON.stringify(this.monthModel));
      console.log("window.history::-",this.monthModel);
      this.selectedDate = this.monthModel.day;
      this.selectedMonth = this.monthModel.month;
      this.selectedYear = this.monthModel.year;
      var theMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        for(var i = 0; i < theMonths.length;i++){
          if(theMonths[i].toLowerCase() === this.selectedMonth){
            this.monthCount = parseInt(i.toString()) +1;
          }
        }

      this.replaceLasttwocharacter = this.selectedDate.substring(0,this.selectedDate.length - 2);
      let convertedDt = this.selectedYear + "-" + this.monthCount + "-" + this.replaceLasttwocharacter;
      let Today = new Date(convertedDt);
      console.log("convertedDt::--",new DatePipe('en-us').transform(Today,'yyyy-MM-dd'));
    }
  }

  @HostListener('window:popstate', ['$event'])
  onPopState(event:any) {
     console.log('Back button pressed');
     sessionStorage.removeItem("monthModel");
     sessionStorage.removeItem("strModel");
  }

  onKeyUpF(evt:any){
    for(let i = 0; i < this.countryDetails.length; i++){
      if(evt.target.value  === this.countryDetails[i].country){
        this.valueName = this.countryDetails[i].capital;
        break;
      }
      else{
        this.valueName = "NO MACHING";
      }
    }
  };

  addUser(){
    this.employees.push({
      firstName: 'Rahul',
      lastName: 'Yadav',
      dept: 'HR',
      salary: 8000,
      doj: new Date('2016-11-19')
    })
  }
 
  reset(){
    this.employees = this.employees.slice()
  }

  fromdespatchKeyUp(evt:any){
    this.valueName = evt;
  }
}
