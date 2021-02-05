import { NgModule } from '@angular/core';
import { VehicleRepository } from './vehicle';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [HttpClientModule],
  providers: [VehicleRepository],
})
export class RepositoryModule {}
