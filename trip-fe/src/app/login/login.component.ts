import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Services } from '../services';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  public username:string;
  public password:string;
  public failed:boolean;
  private login$ = new Subject<any>();
  constructor(
    private services: Services,
    private router: Router
  ) { }

  ngOnInit() {
    this.services.auth(this.login$).subscribe((result) => {
      if (result === true) {
        this.router.navigate(['/main']);
      } else {
        this.failed = true;
      }
    });
  }

  login() {
    this.login$.next({
      username: this.username,
      password: this.password
    });
  }
}
