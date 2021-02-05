import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import {
  CategoryModel,
  FilterItem,
  FiltersCategoriesModel,
  GlobalFilterModel,
} from '../../../data/repository/vehicle/models/vehicle.model';
import { INITIAL_GLOBAL_FILTERS, PER_PAGE_LIST_CONST, SORTING_LIST_CONST } from './card-filters.const';
import { ChangeContext } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-card-filters',
  templateUrl: './card-filters.component.html',
  styleUrls: ['./card-filters.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CardFiltersComponent implements OnInit {
  @Input() total: number;
  @Input() filters: FiltersCategoriesModel;
  @Input() globalFilters: GlobalFilterModel;
  @Output() filtersChanged = new EventEmitter<any>();
  @Output() searchChanged = new EventEmitter<string>();
  @Output() perPageChanged = new EventEmitter<string>();
  @Output() sortingChanged = new EventEmitter<string>();
  @Output() minPriceChanged = new EventEmitter<number>();
  @Output() maxPriceChanged = new EventEmitter<number>();
  selectedFilters: any;
  perPageList = PER_PAGE_LIST_CONST;
  sortingList = SORTING_LIST_CONST;
  searchString: string;
  selectedPerPage: string;
  selectedSorting: string;
  minPriceValue: number;
  maxPriceValue: number;
  checked = false;
  labelItem = 'Filters';

  constructor() {}

  ngOnInit(): void {
    console.log(this.globalFilters);
    this.selectedPerPage = this.globalFilters.pagesize || INITIAL_GLOBAL_FILTERS.perPage;
    this.searchString = this.globalFilters.global_search || INITIAL_GLOBAL_FILTERS.searchString;
    this.selectedSorting = this.globalFilters.sort || INITIAL_GLOBAL_FILTERS.sorting;
    this.minPriceValue = this.globalFilters.start_msrp || INITIAL_GLOBAL_FILTERS.minPrice;
    this.maxPriceValue = this.globalFilters.end_msrp || INITIAL_GLOBAL_FILTERS.maxPrice;
  }

  onFilterChange(event: any, filter: FilterItem) {
    this.selectedFilters = {};
    this.filters.categories.forEach((category: CategoryModel) => {
      category.filter_items.forEach(categoryFilter => {
        if (categoryFilter.name === filter.name) {
          categoryFilter.is_checked = event.target.checked;
        }
        if (categoryFilter.is_checked) {
          let currentCategory = this.selectedFilters[category.categoryName];
          if (currentCategory) {
            currentCategory = currentCategory + ',' + categoryFilter.name;
          } else {
            currentCategory = categoryFilter.name;
          }
          this.selectedFilters[category.categoryName] = currentCategory;
        }
      });
    });

    this.filtersChanged.emit(this.selectedFilters);
  }

  clearFilters() {
    this.filters.categories.forEach((category: CategoryModel) => {
      category.filter_items.forEach(categoryFilter => {
        categoryFilter.is_checked = false;
      });
    });
    this.filtersChanged.emit({});
  }

  onDoSearch() {
    this.searchChanged.emit(this.searchString);
  }

  onSelectPerPage() {
    this.perPageChanged.emit(this.selectedPerPage);
  }

  onSelectSorting() {
    this.sortingChanged.emit(this.selectedSorting);
  }

  onPriceRangeChange(event: ChangeContext) {
    if (this.minPriceValue !== event.value) {
      this.minPriceValue = event.value;
      this.minPriceChanged.emit(event.value);
    }
    if (this.maxPriceValue !== event.highValue) {
      this.maxPriceValue = event.highValue as any;
      this.maxPriceChanged.emit(event.highValue);
    }
  }

  onCheckedLabel() {
    if (this.checked) {
      this.labelItem = 'Filters';
      this.checked = !this.checked;
    } else {
      this.labelItem = 'X';
      this.checked = !this.checked;
    }
  }
}
