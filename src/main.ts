import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideRouter } from '@angular/router';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { routes } from './app/app.routes';

bootstrapApplication(App,{
  providers: [
    provideRouter(routes),
    provideCharts(withDefaultRegisterables()) // ✅ THIS LINE FIXES EVERYTHING
  ]})
  .catch((err) => console.error(err));
