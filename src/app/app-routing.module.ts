import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { Under40Component } from './under40/under40.component';
import { In40and60Component } from './in40and60/in40and60.component';
import { More60Component } from './more60/more60.component';
import { InfoPeopleComponent } from './info-people/info-people.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: '40', component: Under40Component },
  { path: '40and60', component: In40and60Component },
  { path: '60', component: More60Component },
  { path: 'details/:people', component: InfoPeopleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
