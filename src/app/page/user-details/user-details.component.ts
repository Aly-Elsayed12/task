
// import { Component, inject, OnDestroy, OnInit } from '@angular/core';
// import { CardMediaSizeExample } from "../../components/card/card.component";
// import { User } from '../../core/interface/user';
// import { UserService } from '../../core/services/user.service';
// import { ActivatedRoute, RouterLink } from '@angular/router';
// import { Subscription } from 'rxjs';
// import { Details } from '../../core/interface/details';
// import { NgIf } from '@angular/common';

// @Component({
//   selector: 'app-user-details',
//   standalone: true,
//   imports: [CardMediaSizeExample , RouterLink, NgIf],
//   templateUrl: './user-details.component.html',
//   styleUrl: './user-details.component.css'
// })
// export class UserDetailsComponent implements OnInit, OnDestroy {

//   private readonly _UserService = inject(UserService)

//   getUserDetailsSub!:Subscription


//   private route = inject(ActivatedRoute);

//   userID!:number


//   user:Details[] = []

//   ngOnInit(): void {
//     this.route.params.subscribe(params => {
//       this.userID = +params['id'];
//       this.UserDetails(this.userID);
//     });
//   }
//   private UserDetails(id:number): void {

//     this.getUserDetailsSub = this._UserService.getUserDerails(id).subscribe({
//       next: (res: any) => {
//         this.user = res.data;
//         console.log(this.user[0].avatar);

//       },
//       error: (res: any) => {
//         console.error(res);
//       }
//     });
//   }


//   ngOnDestroy(): void {
//     if (this.getUserDetailsSub) {
//       this.getUserDetailsSub.unsubscribe();
//     }
//   }

// }

import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CardMediaSizeExample } from "../../components/card/card.component";
import { UserService } from '../../core/services/user.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { Details } from '../../core/interface/details';
import { NgIf } from '@angular/common';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CardMediaSizeExample, RouterLink, NgIf],
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit, OnDestroy {

  private readonly _UserService = inject(UserService);
  getUserDetailsSub!: Subscription;
  private route = inject(ActivatedRoute);
  private readonly _NgxSpinnerService = inject(NgxSpinnerService);
  userID!: number;

  fname:string=""
  lname:string=""
  email:string=""
  id:string=""
  avatar:string=""

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userID = +params['id'];

      if(this.userID ==0 ){
        this.userID =1
      }

      this.UserDetails(this.userID);
    });
  }

  private UserDetails(id: number): void {
    this._NgxSpinnerService.show()

    this.getUserDetailsSub = this._UserService.getUserDerails(id).subscribe({
      next: (res: any) => {
        this._NgxSpinnerService.hide()
        this.id = res.data.id;
        this.fname = res.data.first_name
        this.lname = res.data.last_name
        this.email = res.data.email
        this.avatar = res.data.avatar
          console.log(this.userdata);

      },
      error: (res: any) => {
        console.error(res);
      }
    });
  }
  userdata: Details[] = [];
  ngOnDestroy(): void {
    if (this.getUserDetailsSub) {
      this.getUserDetailsSub.unsubscribe();
    }
  }
}

