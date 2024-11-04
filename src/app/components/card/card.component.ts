
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, Input, OnDestroy, SimpleChanges } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { UserService } from '../../core/services/user.service';
import { User } from '../../core/interface/user';
import { Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { NgIf } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

/**
 * @title Card with media size
 */
@Component({
  selector: 'card-media-size-example',
  templateUrl: 'card.component.html',
  styleUrl: 'card.component.css',
  standalone: true,
  imports: [MatCardModule, RouterLink, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardMediaSizeExample implements OnDestroy {
  private readonly _UserService = inject(UserService);
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly _NgxSpinnerService = inject(NgxSpinnerService);

  _Router = inject(Router);

  getUserSub!: Subscription;

  @Input() pageNum!: number;
  @Input() userID!: number;

  searchId!:number
  searchName!: string;
  currentUser!: User | null;
  user!: User[];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['pageNum']) {
      this.getUsers();
    }
  }

  private getUsers(): void {
    this.getUserSub = this._UserService.getUser(this.pageNum).subscribe({
      next: (res: any) => {
        this.user = res.data;
        this.userID = this.user[0].id;
        this.cdr.detectChanges();
      },
      error: (res: any) => {
        console.log(res);
      }
    });
  }

  searchById(){
    if (this.searchId) {
      this._NgxSpinnerService.show()
      this._UserService.getUser(this.searchId).subscribe({
        next: (res: any) => {
          if (res.data) {
            this.user = res.data;
            this.cdr.detectChanges();
            this._NgxSpinnerService.hide()
          } else {
            console.error("User not found");
            this.resetSearch();

          }
        },
        error: (err: any) => {
          console.log("User not found or error in fetching data", err);
        }
      });
    }
  }
  private resetSearch(): void {
    this.searchId = 1;
    this.cdr.detectChanges();
  }




  userDetails(userId: number): void {
    this._Router.navigate(["/user-details", userId]);
  }

  ngOnDestroy(): void {
    if (this.getUserSub) {
      this.getUserSub.unsubscribe();
    }
  }
















}








