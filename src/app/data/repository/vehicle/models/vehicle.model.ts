export interface VehiclePaginationModel {
  filters: FiltersCategoriesModel;
  items: VehicleModel[];
  prev: string;
  next: string;
  page: number;
  page_size: number;
  self: string;
  total: number;
  utc: string;
}

export class VehicleModel {
  id: string;
  title: string;
  vin: string;
  site: string;
  location: string;
  chromeStyleId: boolean;
  exteriorColor: string;
  interiorColor: string;
  engineSize: string;
  engineDescription: boolean;
  stockNo: string;
  mileage: number;
  year: string;
  model: string;
  make: string;
  certified: string;
  type: string;
  body_style: boolean;
  drivetrain: boolean;
  mpg_highway: string;
  mpg_city: string;
  fuel_type: string;
  msrp: number;
  trim: string;
  price: number;
  internet_price: string;
  price_old: boolean;
  transmission: boolean;
  shortComments: string;
  thumbnailImage: boolean;
  discount: boolean;
  externalImages: Array<string>;
  self: string;
  public mapFromJson(dto: any) {
    this.id = dto.id;
    this.externalImages = dto.externalImages;
  }
}

export interface FiltersCategoriesModel {
  categories: CategoryModel[];
}

export interface CategoryModel {
  categoryName: string;
  filter_items: FilterItem[];
}

export interface FilterItem {
  count: number;
  is_checked: boolean;
  name: string;
}

export interface GlobalFilterModel {
  pagesize: string;
  global_search: string;
  start_msrp: number;
  end_msrp: number;
  sort: string;
}
