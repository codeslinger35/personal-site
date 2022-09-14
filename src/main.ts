import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { defineForgeComponents } from './define-forge';
import { defineDatePickerComponent } from '@tylertech/forge';
import { defineIcons } from './define-forge-icons';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

defineForgeComponents();
defineIcons();