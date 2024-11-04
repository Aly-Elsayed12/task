import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageNumService {

  constructor() { }
  private dataSource = new BehaviorSubject<any>(null);
  pageNum = this.dataSource.asObservable()

  changeData(data:number) {
    this.dataSource.next(data);
  }
}
