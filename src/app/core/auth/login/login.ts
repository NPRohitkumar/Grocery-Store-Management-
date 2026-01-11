import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { Auth } from '../../services/auth';

/**
 * @title Card overview
 */
@Component({
  standalone:true,
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrl: './login.css',
  imports: [MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule, ReactiveFormsModule, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Login {
  loginForm: any;
  // temporary hardcoded credentials
  private readonly validUsername = 'admin';
  private readonly validPassword = 'admin123';

  constructor(
    private fb: FormBuilder , 
    private router:Router,
    private authService:Auth) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }

  onLogin() {
    let {username , password} = this.loginForm.value;
    const success = this.authService.login(username,password);
    if(success){
      console.log("user successfully verified");
      this.router.navigate(["/dashboard"]);
    } else{
      alert("Invalid credentials , please retry!");
    }
    console.log(this.loginForm.value.username , this.loginForm.value.password);
  }
}
