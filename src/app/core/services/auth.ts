import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private readonly username = "admin";
  private readonly password = "admin123"

  login(username:string ,password: string): boolean{
    if(username === this.username && password===this.password){
      localStorage.setItem("isLoggedIn","true");
      return true;
    } else {
      return false;
    }
  }

  logout():void{
    localStorage.removeItem("isLoggedIn");
  }

  isAuthenticated():boolean{
    return localStorage.getItem("isLoggedIn")==="true";
  }
}
