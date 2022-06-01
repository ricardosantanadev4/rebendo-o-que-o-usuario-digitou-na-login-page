import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login';
@Component({
  selector: 'app-pai',
  templateUrl: './pai.component.html',
  styleUrls: ['./pai.component.scss']
})
export class PaiComponent implements OnInit {
  login: Login = {}

  constructor() { }

  ngOnInit(): void {
  }

  loginPassword() {
    console.log(this.login)
  }
}
