import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleRepository } from '../../../data/repository/vehicle';
import { VehiclePaginationModel } from '../../../data/repository/vehicle/models/vehicle.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  total: number;
  searchString = '';
  lat = 33.734461;
  lng = -116.445171;

  constructor(private _vehicleRepository: VehicleRepository, private router: Router) {}

  ngOnInit() {
    this._vehicleRepository.getItemsList('').subscribe((res: VehiclePaginationModel) => {
      this.total = res.total;
    });
  }

  onSearch() {
    if (!this.searchString) {
      return;
    }
    this.router.navigate(['inventory'], { queryParams: { global_search: this.searchString } });
  }
}
