import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { SetMonth } from './model/setMonth';
import { IUser } from './model/product';

const _datalocation = './assets/data/sepMonth.json';

// Mock users data
export const MOCK_USERS_DATA: IUser[] = [
  {
      id: '1',
      email: 'jackbing@gmail.com',
      roles: ['Student'],
      displayName: 'Jack Bing',
  },
  {
      id: '2',
      email: 'chandlerbing@gmail.com',
      roles: ['Super Admin'],
      displayName: 'Chandler Bing',
  },
  {
      id: '3',
      email: 'appAdmin@gmail.com',
      roles: ['Teacher'],
      displayName: 'Admin',
  },
];

// Mock user roles data
export const MOCK_USER_ROLES: string[] = ['Student', 'Super Admin', 'Teacher'];


@Injectable({
  providedIn: 'root'
})
export class MonthService {

  constructor(private _httpCl:HttpClient) { }

  getSeptembermonthdata():Observable<SetMonth[]>{
    return this._httpCl.get<SetMonth[]>(_datalocation);
  }

  getUsers(): Observable<IUser[]> {
    return of(MOCK_USERS_DATA).pipe(delay(2000));
}

// Mock function to fetch the user roles.
getUserRoles(): Observable<string[]> {
    return of(MOCK_USER_ROLES).pipe(delay(2000));
}

}
