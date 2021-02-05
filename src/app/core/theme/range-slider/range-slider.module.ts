import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RangeSliderComponent } from './range-slider.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';

@NgModule({
  declarations: [RangeSliderComponent],
  imports: [CommonModule, NgxSliderModule],
  exports: [RangeSliderComponent],
})
export class RangeSliderModule {}
