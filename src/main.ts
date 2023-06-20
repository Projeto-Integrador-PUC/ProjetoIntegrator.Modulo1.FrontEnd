/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Buffer as CustomBuffer } from 'buffer';

import { AppModule } from './app/app.module';

// @ts-ignore
window.Buffer = CustomBuffer;
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
