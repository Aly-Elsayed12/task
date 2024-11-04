
import { Component, inject, Output, EventEmitter, OnInit } from '@angular/core';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';

/**
 * @title Paginator
 */
@Component({
  selector: 'paginator-overview-example',
  templateUrl: 'paginator.component.html',
  styleUrls: ['paginator.component.css'],
  standalone: true,
  imports: [MatPaginatorModule],
})
export class PaginatorOverviewExample {
  _Router = inject(Router);

  pagenum: number = 1 ;
  length = 12;
  pageSize = 1;
  pageIndex = 0;
  showFirstLastButtons = false;

  @Output() itemEvent: EventEmitter<number> = new EventEmitter();



  handlePageEvent(event: PageEvent) {
    this.length = event.length;
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;

    this.pagenum = this.pageIndex  ;

    this.pagenum += 1

    this.itemEvent.emit(this.pagenum);

  }


}




