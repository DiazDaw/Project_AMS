import { Injectable } from '@angular/core';
import { LoginResponseModel } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class InfoUserService {
  private _loginUser!: LoginResponseModel;

  get loginUser(): LoginResponseModel {
    return this._loginUser;
  }

  set loginUser(loginUser: LoginResponseModel) {
    this._loginUser = loginUser;
  }
}
