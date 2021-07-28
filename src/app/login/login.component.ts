import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = ""
  password = ""

  constructor(private router: Router, private hardcodedAuthenticationService: HardcodedAuthenticationService) { }
  handleLogin()
  {
    // console.log(this.username);
    if(this.hardcodedAuthenticationService.authenticate(this.username,this.password))
    {
      this.router.navigate(['welcome',this.username])
    }
    else
    console.log("Invalid credentials")
  }

  ngOnInit() {
  }

}
