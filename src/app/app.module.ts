import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { PageModule } from './view/page/page.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule,

    // entry point
    PageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
