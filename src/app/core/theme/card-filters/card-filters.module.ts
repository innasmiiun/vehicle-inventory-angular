import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardFiltersComponent } from './card-filters.component';
import { FormsModule } from '@angular/forms';
import { RangeSliderModule } from '../range-slider/range-slider.module';

@NgModule({
  declarations: [CardFiltersComponent],
  exports: [CardFiltersComponent],
  imports: [CommonModule, FormsModule, RangeSliderModule],
})
export class CardFiltersModule {}
