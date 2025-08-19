import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app';

bootstrapApplication(AppComponent, appConfig)
  .then(()=> {
    window.dispatchEvent(new Event('AngularReady'));
  }
  )
  .catch((err) => console.error(err));