import { Component, OnInit } from '@angular/core';
import { VehicleRepository } from '../../../data/repository';
import {
  FiltersCategoriesModel, GlobalFilterModel,
  VehicleModel,
  VehiclePaginationModel,
} from '../../../data/repository/vehicle/models/vehicle.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss'],
})
export class InventoryComponent implements OnInit {
  total: number;
  items: Array<VehicleModel> = [];
  filters: FiltersCategoriesModel;
  pagesCount: number;
  pageSize: number;
  globalFilters: GlobalFilterModel;

  selectedFilters: any;
  page: number;
  constructor(private _vehicleRepository: VehicleRepository, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe(() => {
      this.selectedFilters = this.route.snapshot.queryParams;
      this.globalFilters = {
        pagesize: this.selectedFilters.pagesize || '15',
        sort: this.selectedFilters.sort,
        global_search: this.selectedFilters.global_search,
        start_msrp: this.selectedFilters.start_msrp,
        end_msrp: this.selectedFilters.end_msrp,
      };
      this.getItemsList(this.selectedFilters);
    });
  }

  onFiltersChanged(filters: any) {
    this.selectedFilters = filters;
    this.getItemsList(this.selectedFilters);
  }

  getItemsList(filters: any, page?: number) {
    const newFilters = { ...filters };
    if (page) {
      newFilters.page = page;
    }
    if (this.globalFilters.global_search) {
      newFilters.global_search = this.globalFilters.global_search;
    } else {
      delete newFilters.global_search;
    }
    if (this.globalFilters.pagesize) {
      newFilters.pagesize = this.globalFilters.pagesize;
    }
    if (this.globalFilters.sort) {
      newFilters.sort = this.globalFilters.sort;
    }
    if (this.globalFilters.start_msrp) {
      newFilters.start_msrp = this.globalFilters.start_msrp;
    } else {
      delete newFilters.start_msrp;
    }
    if (this.globalFilters.end_msrp) {
      newFilters.end_msrp = this.globalFilters.end_msrp;
    }
    this._vehicleRepository
      .getItemsList(this.objectToQueryString(newFilters))
      .subscribe((res: VehiclePaginationModel) => {
        this.setItemsListData(res);
        this.setQueryUrl(newFilters);
      });
  }

  objectToQueryString(obj: any) {
    if (!obj) {
      return '';
    }
    const params = new URLSearchParams();
    for (const key of Object.keys(obj)) {
      params.set(key, obj[key]);
    }
    return params;
  }

  setItemsListData(res: VehiclePaginationModel) {
    this.page = res.page;
    this.pageSize = res.page_size;
    this.total = res.total;
    this.items = res.items;
    this.filters = res.filters;
    this.pagesCount = Math.ceil(this.total / this.pageSize);
  }

  onPagesChanged(page: number) {
    this.getItemsList(this.selectedFilters, page);
  }

  setQueryUrl(filters: any) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: filters,
      replaceUrl: true,
    });
  }

  onSearch(str: string) {
    if (!this.globalFilters.global_search && !str) {
      return;
    }
    this.globalFilters.global_search = str;
    this.getItemsList(this.selectedFilters);
  }

  onPerPageChanged(perPage: string) {
    this.globalFilters.pagesize = perPage;
    this.getItemsList(this.selectedFilters);
  }

  onSortingChanged(sorting: string) {
    this.globalFilters.sort = sorting;
    this.getItemsList(this.selectedFilters);
  }

  onMinPriceChanged(min: number) {
    if (!this.globalFilters.start_msrp && !min) {
      return;
    }
    this.globalFilters.start_msrp = min;
    this.getItemsList(this.selectedFilters);
  }

  onMaxPriceChanged(max: number) {
    this.globalFilters.end_msrp = max;
    this.getItemsList(this.selectedFilters);
  }
}
