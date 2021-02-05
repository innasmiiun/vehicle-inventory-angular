import { Component, Input, OnInit } from '@angular/core';
import { VehicleRepository } from '../../../data/repository/vehicle';
import { ActivatedRoute } from '@angular/router';
import { VehicleModel } from '../../../data/repository/vehicle/models/vehicle.model';

@Component({
  selector: 'app-vehicle-page',
  templateUrl: './vehicle-page.component.html',
  styleUrls: ['./vehicle-page.component.scss'],
})
export class VehiclePageComponent implements OnInit {
  @Input() externalImages: string[];
  @Input() id: string;
  @Input() title: string;
  @Input() vin: string;
  @Input() location: string;
  @Input() stockNo: string;
  @Input() engineSize: string;
  @Input() exteriorColor: string;
  @Input() interiorColor: string;
  @Input() mpg_highway: string;
  @Input() mpg_city: string;
  @Input() msrp: number;
  @Input() price: number;

  vehicle: VehicleModel;
  slideConfig = { slidesToShow: 1, slidesToScroll: 1, autoplay: true };

  constructor(private _vehicleRepository: VehicleRepository, private _route: ActivatedRoute) {}

  ngOnInit() {
    const vehiclePath = this._route.snapshot.params.id;
    const params = vehiclePath.split('-');
    const vehicleId = params[params.length - 1];
    this._vehicleRepository.getVehicleData(vehicleId).subscribe(data => {
      this.vehicle = data;
    });
  }
}
