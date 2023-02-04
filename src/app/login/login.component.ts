import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 username='Maadevaa';
  password='Mahadev';
  errorMessage='';
  constructor(private authService:AuthServiceService,private router:Router) { }

  ngOnInit(): void {
  }
  LoggingIn(){
    if(this.username.trim().length===0){
      this.errorMessage='UserName is Required.'
    }else if(this.password.trim().length===0){
      this.errorMessage='Password is Required.'
    }else{
      this.errorMessage="";
      let res=this.authService.Login(this.username,this.password);
      if(res===200){
        this.router.navigate(['home'])
      }
      if(res===403){
        this.errorMessage='Invalid Credentials.'
      }
    }

  }

}
