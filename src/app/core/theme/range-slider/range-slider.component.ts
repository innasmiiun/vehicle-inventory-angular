import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChangeContext, Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-range-slider',
  templateUrl: './range-slider.component.html',
  styleUrls: ['./range-slider.component.scss'],
})
export class RangeSliderComponent implements OnInit {
  @Input() minValue: number;
  @Input() maxValue: number;
  @Output() changedValues = new EventEmitter<ChangeContext>();
  options: Options = {
    floor: 0,
    ceil: 100000,
  };
  constructor() {}

  ngOnInit(): void {}

  onRangeChange(event: ChangeContext) {
    this.changedValues.emit(event);
  }
}
