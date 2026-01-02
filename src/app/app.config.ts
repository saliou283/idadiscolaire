// src/app/app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { RouteReuseStrategy } from '@angular/router';

// Si vous avez un fichier de routes séparé, importez-le ici
import { routes } from './app.routes'; // Assurez-vous que ce fichier existe aussi si vous l'importez

export const appConfig: ApplicationConfig = { // <-- 'appConfig' doit être exporté
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes),
    // ... autres providers (ex: provideHttpClient())
  ]
};