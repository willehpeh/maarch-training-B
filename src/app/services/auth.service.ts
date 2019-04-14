import { User } from '../models/User';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth: boolean;
  currentUser: User;

  connect() {
    this.isAuth = true;
    this.currentUser = {
      id: 'moih',
      name: 'Will',
      email: 'will@will.com'
    };
  }
}
