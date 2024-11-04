import { Component, } from '@angular/core';
import { CardMediaSizeExample } from '../../components/card/card.component';
import { PaginatorOverviewExample } from '../../components/paginator/paginator.component';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardMediaSizeExample, PaginatorOverviewExample],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent  {


  data:number =0

  userID: number = 1;


}
