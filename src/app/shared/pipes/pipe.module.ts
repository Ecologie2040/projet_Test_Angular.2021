import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HidePasswordPipe } from './hide-password/hide-password.pipe';




@NgModule({
  declarations: [HidePasswordPipe, ],
  imports: [
    CommonModule
  ],
  exports: [
    HidePasswordPipe
  ]
})
export class PipeModule { }
