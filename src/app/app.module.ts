import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import {LogInComponent} from "./log-in/log-in.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {HomeComponent} from "./home/home.component";
import {HistoricComponent} from "./historic/historic.component";
import {TestComponent} from "./test/test.component";
import { MaterialModule } from './material/material.module';
@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    HomeComponent,
    HistoricComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
