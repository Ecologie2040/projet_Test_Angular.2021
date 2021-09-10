import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { PipeModule } from './pipes/pipe.module';
import { HidePasswordPipe } from './pipes/hide-password/hide-password.pipe';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    PipeModule
  ],
  exports: [
    MaterialModule,
    PipeModule
  ]
})
export class SharedModule { }
