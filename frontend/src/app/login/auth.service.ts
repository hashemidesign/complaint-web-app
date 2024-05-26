import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private _http: HttpClient) { }

  login(data: any) {
    return this._http.post(`/api/login`, data)
  }

  register(data: any) {
    return this._http.post(`/api/AddNewUser`, data)
  }
}
