import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-vehicle',
  templateUrl: './card-vehicle.component.html',
  styleUrls: ['./card-vehicle.component.scss'],
})
export class CardVehicleComponent implements OnInit {
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
  urlWithoutSpaces = '';

  ngOnInit() {
    const locationWithoutSpaces = this.removeSpaces(this.location);
    const titleWithoutSpaces = this.removeSpaces(this.title);
    this.urlWithoutSpaces = [locationWithoutSpaces, titleWithoutSpaces, this.vin, this.id].join('-');
  }

  removeSpaces(str: string) {
    return str.replace(/\s+/g, '-');
  }
}
