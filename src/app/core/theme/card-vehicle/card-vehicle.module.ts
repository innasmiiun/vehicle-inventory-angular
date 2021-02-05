import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardVehicleComponent } from './card-vehicle.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CardVehicleComponent],
  exports: [CardVehicleComponent],
  imports: [CommonModule, RouterModule],
})
export class CardVehicleModule {}
