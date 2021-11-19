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
import {MatTableModule} from "@angular/material/table";
import { NavigationComponent } from './navigation/navigation.component';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    HomeComponent,
    HistoricComponent,
    TestComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatTableModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
