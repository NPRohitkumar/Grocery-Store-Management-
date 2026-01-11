import { Routes } from '@angular/router';
import { Login } from './core/auth/login/login';
import { Dashboard } from './feature/dashboard/dashboard';
import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [
    { path: 'login', component: Login },
    { path: 'dashboard', component: Dashboard , canActivate:[authGuard] },
    { path: '', redirectTo: 'login', pathMatch: 'full' }
];


