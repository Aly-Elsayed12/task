import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _HttpClient:HttpClient) {
  }



  getUser(pageNumber:number | undefined):Observable<any>{
    return this._HttpClient.get(`https://reqres.in/api/users?per_page=1&page=${pageNumber}`)
  }
  getUserDerails(userID:Number):Observable<any>{
    return this._HttpClient.get(`https://reqres.in/api/users/${userID}`)
  }
}






