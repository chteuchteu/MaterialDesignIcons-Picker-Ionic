import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Icons } from "../providers/icons";
import { IconPage } from "../pages/icon/icon";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    IconPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    IconPage
  ],
  providers: [Icons]
})
export class AppModule {}
