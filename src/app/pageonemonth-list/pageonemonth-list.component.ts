import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../model/product';
import { SetMonth } from '../model/setMonth';
import { MonthService } from '../month.service';

@Component({
  selector: 'app-pageonemonth-list',
  templateUrl: './pageonemonth-list.component.html',
  styleUrls: ['./pageonemonth-list.component.css']
})
export class PageonemonthListComponent implements OnInit {

  septemberMonthData: SetMonth[] = [];
  products: Product[] = [];
  constructor(private septemberMonthServ:MonthService,private router:Router) {
   // this.septemberMonthData = new Array<SetMonth>()
   }

  ngOnInit(): void {
    this.getSeptemberMonthData();
  }

  getSeptemberMonthData(){
    this.septemberMonthServ.getSeptembermonthdata().subscribe((res)=>{
      console.log("Show Res::--",res);
      this.septemberMonthData = res;
      console.log("this.septemberMonthData::--",res);
    })
  }

  // this is for navigation extras
  dateSelect(selectedDate:SetMonth){
    console.log("Date::- "+ selectedDate);
    this.router.navigate(['/pageoneDetails'],  {state: { date: selectedDate }});
  }

  // this is for window.history.state[0];
  dateSelecthistory(selectedDate:any){
    console.log("Date::- "+ JSON.stringify(selectedDate));
    this.router.navigate(['/pageoneDetails'],  {state: [selectedDate]});
  }
}
