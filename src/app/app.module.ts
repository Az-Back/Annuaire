import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { HeaderComponent } from './header/header.component';
import { PeopleComponent } from './people/people.component';
import { InfoPeopleComponent } from './info-people/info-people.component';
import { Under40Component } from './under40/under40.component';
import { In40and60Component } from './in40and60/in40and60.component';
import { More60Component } from './more60/more60.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    HeaderComponent,
    PeopleComponent,
    InfoPeopleComponent,
    Under40Component,
    In40and60Component,
    More60Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'fr-FR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    registerLocaleData(fr.default);
  }
 }
