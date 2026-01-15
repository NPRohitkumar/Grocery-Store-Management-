import { Routes } from '@angular/router';
import { Login } from './core/auth/login/login';
import { Dashboard } from './feature/dashboard/dashboard';
import { authGuard } from './core/guards/auth-guard';
import { Layout } from './layout/layout';

export const routes: Routes = [
    { path: 'login', component: Login },
    {
        path: '',
        component: Layout,
        canActivate: [authGuard],
        children: [
            { path: 'dashboard', component: Dashboard }
        ]
    },
    { path: '', redirectTo: 'login', pathMatch: 'full' }
];


