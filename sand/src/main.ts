import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';

import "../node_modules/videogular2/fonts/videogular.css";

import {enableProdMode} from '@angular/core';
enableProdMode();

platformBrowserDynamic().bootstrapModule(AppModule);
