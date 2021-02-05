import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnChanges {
  @Input() page: number;
  @Input() pageSize: number;
  @Input() total: number;
  @Output() pageChanged = new EventEmitter<number>();
  pagesCount: number;
  isFirstPage: boolean;
  isLastPage: boolean;

  constructor() {}

  ngOnChanges(): void {
    this.pagesCount = Math.ceil(this.total / this.pageSize);
    this.isFirstPage = this.page === 1;
    this.isLastPage = this.page === this.pagesCount;
  }

  goToPage(pagesCount: number) {
    this.pageChanged.emit(pagesCount);
  }
}
