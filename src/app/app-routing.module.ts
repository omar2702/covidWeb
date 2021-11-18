import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LogInComponent} from "./log-in/log-in.component";
import {TestComponent} from "./test/test.component";
import {HistoricComponent} from "./historic/historic.component";
import {HomeComponent} from "./home/home.component";


const routes: Routes = [
  {path: '/', component: LogInComponent},
  {path: '/test', component: TestComponent},
  {path: '/historic', component: HistoricComponent},
  {path: '/home', component: HomeComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
