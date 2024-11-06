import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { routes } from './app.routes'; // Đảm bảo đường dẫn chính xác đến app.routes.ts
import { RouterModule } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideClientHydration(),
    importProvidersFrom(RouterModule),
    provideRouter(routes),
    ,provideHttpClient()
  ]
};
