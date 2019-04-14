import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../models/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isAuth: boolean;
  user: User;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.user = this.auth.currentUser;
    this.isAuth = this.auth.isAuth;
  }

  onConnect() {
    this.auth.connect();
    this.user = this.auth.currentUser;
    this.isAuth = this.auth.isAuth;
  }

}
