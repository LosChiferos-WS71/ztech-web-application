import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { customInterceptor } from './iam/services/custom.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(withInterceptors([customInterceptor])), provideRouter(routes), provideAnimationsAsync(), provideAnimationsAsync(), provideFirebaseApp(() => initializeApp({"projectId":"ztech-1d0e3","appId":"1:274254356089:web:8ad30475697f0c70c13ea8","storageBucket":"ztech-1d0e3.appspot.com","apiKey":"AIzaSyBevmZrgVUXfd0gSUxeVttXeuWFohGNmqA","authDomain":"ztech-1d0e3.firebaseapp.com","messagingSenderId":"274254356089","measurementId":"G-7YJNLH1EX4"})), provideAuth(() => getAuth()), provideStorage(() => getStorage()), provideHttpClient()]
};
