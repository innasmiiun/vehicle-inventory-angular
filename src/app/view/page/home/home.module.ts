import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCC9U1wktjOVh188BNCVICrPusV41VI70Q'
    })
  ]
})
export class HomeModule {
}
