import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent, HeaderComponent } from './component';
import { PageNotFoundComponent } from './page-not-found';
import { InventoryComponent } from './inventory';

import { PageComponent } from './page.component';

import { PageRoutingModule } from './page-routing.module';
import { RepositoryModule } from '../../data/repository';
import { ThemeModule } from '../../core/theme';
import { VehiclePageComponent } from './vehicle-page/vehicle-page.component';
import { HomeModule } from './home/home.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [
    /// common
    HeaderComponent,
    FooterComponent,
    /// pages
    PageNotFoundComponent,
    InventoryComponent,
    PageComponent,
    VehiclePageComponent,
  ],
  imports: [CommonModule, RepositoryModule, PageRoutingModule, ThemeModule, HomeModule, SlickCarouselModule],
})
export class PageModule {}
