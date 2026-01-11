import { CanActivateFn , Router} from '@angular/router';
import {  inject } from '@angular/core';

export const authGuard: CanActivateFn = () => {
  console.log("authguard executed");
  const router = inject(Router);
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  
  if(isLoggedIn === "true"){ 
    console.log(1);
    return true;
  }
  else{
    console.log(2);
    router.navigate(["/login"]);
    return false;
  }
};
