/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
