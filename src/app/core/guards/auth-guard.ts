import { CanActivateFn , Router} from '@angular/router';
import {  inject } from '@angular/core';

export const authGuard: CanActivateFn = () => {
  console.log("authguard executed");
  const router = inject(Router);
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  
  if(isLoggedIn === "true"){ 
    return true;
  }
  else{
    router.navigate(["/login"]);
    return false;
  }
};
