import { ApplicationConfig, importProvidersFrom} from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { authInterceptProvider } from './utils/jwt.interceptor';

// Provides all the routes for the http client to capture
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(HttpClientModule),
    authInterceptProvider
  ]
};