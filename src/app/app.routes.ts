import { Routes } from '@angular/router';
import { UserComponent } from './page/user/user.component';
import { UserDetailsComponent } from './page/user-details/user-details.component';
import { NotFoundComponent } from './page/not-found/not-found.component';

export const routes: Routes = [
  {path: "user", component:UserComponent, title:"User"},
  {path: "", redirectTo:'user', pathMatch:"full" },
  {path: "user-details/:id", component:UserDetailsComponent, title:"UserDetails"},
  {path: "**", component:NotFoundComponent , title:"NotFound"}
];
