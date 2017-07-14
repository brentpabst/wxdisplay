import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { MaterializeModule } from 'angular2-materialize';
import * as moment from 'moment';
import * as xml2js from 'xml2js';

import { AppComponent } from './app.component';
import { WxObService } from './wxob.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
  ],
  providers: [
    [WxObService]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
