import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-register-master',
  templateUrl: './login-register-master.component.html',
  styleUrls: ['./login-register-master.component.css']
})
export class LoginRegisterMasterComponent implements OnInit {
  users: any[];
  constructor() {}
  onClick(): void {
    alert('hello');
    console.log('alert');
  }
  ngOnInit() {}
}
