import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageHeightDirective } from './core/directives/image-height.directive';
import {AUTH_SERVICE, USERS_SERVICE} from "./core/interfaces";
import {AuthImplService, UsersImplService} from "./core/services";
import { HomeComponent } from './components/home/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageHeightDirective,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{ provide: USERS_SERVICE, useClass: UsersImplService },
              { provide: AUTH_SERVICE, useClass: AuthImplService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
