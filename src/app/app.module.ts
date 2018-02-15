import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SuiModule} from 'ng2-semantic-ui';


import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    SuiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
