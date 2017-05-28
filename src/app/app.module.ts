import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from "./core/core.module";
import { DashboardModule } from './dashboard/dashboard.module';
import { AppComponent } from './app.component';

const componentList = [
  AppComponent
];

const modulesList = [
  BrowserModule,
  CoreModule,
    DashboardModule
]

@NgModule({
  declarations: [
    ...componentList
  ],
  imports: [
    ...modulesList
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
