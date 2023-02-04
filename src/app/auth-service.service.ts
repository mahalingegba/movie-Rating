import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private router:Router) { }

  Login(uname,pwd){
    if(uname==='Maadevaa' && pwd==='Mahadev'){
      return 200;
    }else{
      return 403;
    }
  }
logout(){
  this.router.navigate(['login']);
}
}
