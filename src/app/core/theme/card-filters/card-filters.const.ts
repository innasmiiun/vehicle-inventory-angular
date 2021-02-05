export const PER_PAGE_LIST_CONST = [{ name: '15' }, { name: '30' }, { name: '60' }, { name: '90' }];

export const SORTING_LIST_CONST = [
  { value: 'msrp_asc', name: 'Price (Low to High)' },
  { value: 'msrp_desc', name: 'Price (High to Low)' },
  { value: 'make_asc', name: 'Make (A to Z)' },
  { value: 'make_desc', name: 'Make (Z to A)' },
  { value: 'model_asc', name: 'Model (A to Z)' },
  { value: 'model_desc', name: 'Model (Z to A)' },
  { value: 'year_asc', name: 'Year (Low to High)' },
  { value: 'year_desc', name: 'Year (High to Low)' },
  { value: 'images_asc', name: 'Number of Images (Low to High)' },
  { value: 'images_desc', name: 'Number of Images (High to Low)' },
];

export const INITIAL_GLOBAL_FILTERS = {
  perPage: '',
  sorting: '',
  searchString: '',
  minPrice: 0,
  maxPrice: 100000,
};
