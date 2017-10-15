import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

//FIREBASE
import { AngularFireModule } from "angularfire2";
export const firebaseConfig = {
  apiKey: "AIzaSyD0pcpak3_Yyl1RlUwdTD0LkIum12GFbLc",
  authDomain: "rolworld-eabc2.firebaseapp.com",
  databaseURL: "https://rolworld-eabc2.firebaseio.com",
  projectId: "rolworld-eabc2",
  storageBucket: "",
  messagingSenderId: "342314693300"
};

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
