import {HttpClientModule} from '@angular/common/http';
import { JsonMenuPage } from './../pages/json-menu/json-menu';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SocialInfoPage } from '../pages/social-info/social-info';
import { SMS } from '@ionic-native/sms';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { BaCodeScannerPage } from '../pages/ba-code-scanner/ba-code-scanner';
import { Geolocation } from '@ionic-native/geolocation';
import { GmapPage } from '../pages/gmap/gmap';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,SocialInfoPage,BaCodeScannerPage,GmapPage,JsonMenuPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,SocialInfoPage,BaCodeScannerPage,GmapPage,JsonMenuPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SMS,
    BarcodeScanner,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
