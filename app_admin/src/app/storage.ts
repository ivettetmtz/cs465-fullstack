import { InjectionToken } from '@angular/core';

// Token can be gathered to place in storage and used for logged in users
export const BROWSER_STORAGE = new InjectionToken<Storage>('Browser Storage', {
    providedIn: 'root',
    factory: () => localStorage
});

export class Storage {
    
}