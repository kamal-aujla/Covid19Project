import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { UserDetailsModel } from '../Models/userDetails.model';
import { map, retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';


const SERVER_IP = '13.127.29.108';
const API_URL = `http://${SERVER_IP}:3000/api/userdetails/`;

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  constructor(private _http:HttpClient) { }

  saveUser(userDetails:UserDetailsModel):Observable<UserDetailsModel>{
    return this._http.post<UserDetailsModel>(API_URL,userDetails)
  }
  getUser(email:string):Observable<string>{
    let userParams= new HttpParams()
    userParams= userParams.append('email',email)
    return this._http.get<string>(`${API_URL}${email}`)
  }
  updateUser(email:string,udModel:UserDetailsModel):Observable<any>{
    let url = API_URL + email
    return this._http.patch<any>(url,{'testResult':udModel.testResult},{observe:'response'})
  }

}
  
