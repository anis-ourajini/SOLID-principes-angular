import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToNumberPipe } from './to-number.pipe';



@NgModule({
  declarations: [
    ToNumberPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ToNumberPipe
  ]
})
export class PipesModule { }
