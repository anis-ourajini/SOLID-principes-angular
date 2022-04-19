import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home/home.component";

const routes: Routes = [{ path: 'auth', loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule) },
  {path: 'home', component: HomeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
