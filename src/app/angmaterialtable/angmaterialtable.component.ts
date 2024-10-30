import { Component, OnInit } from '@angular/core';
import { IUser } from '../model/product';
import { MonthService } from '../month.service';
import { forkJoin } from 'rxjs';

const USER_DATA = [
  {'name': 'John Smith', 'occupation': 'Advisor', 'age': 36},
  {'name': 'Muhi Masri', 'occupation': 'Developer', 'age': 28},
  {'name': 'Peter Adams', 'occupation': 'HR', 'age': 20},
  {'name': 'Lora Bay', 'occupation': 'Marketing', 'age': 43}
];

@Component({
  selector: 'app-angmaterialtable',
  templateUrl: './angmaterialtable.component.html',
  styleUrls: ['./angmaterialtable.component.css']
})
export class AngmaterialtableComponent implements OnInit {

  displayedColumns: string[] = ['name', 'occupation', 'age'];
  dataSource: any = USER_DATA;
  
  users!: IUser[]; 
  userRoles!: string[];

  constructor(private forkjoinDta:MonthService) { }

  ngOnInit(): void {
    this.getUsersData();

  }

  getUsersData() {
    forkJoin({
      users: this.forkjoinDta.getUsers(),
      userRoles: this.forkjoinDta.getUserRoles()
    }).subscribe(({users, userRoles}) =>{
      this.users = users
      console.log('USERS::--',this.users);
      this.userRoles = userRoles
      console.log('userRoles::--',this.userRoles);
    })
  }
}
