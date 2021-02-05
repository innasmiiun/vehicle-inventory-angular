import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardVehicleModule } from './card-vehicle/card-vehicle.module';
import { CardFiltersModule } from './card-filters/card-filters.module';
import { PaginationModule } from './pagination/pagination.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, CardVehicleModule, CardFiltersModule, PaginationModule],
  exports: [CardVehicleModule, CardFiltersModule, PaginationModule],
})
export class ThemeModule {}
