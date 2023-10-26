import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreationFormComponent } from './creation-form.component';



@NgModule({
  declarations: [
    CreationFormComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CreationFormComponent
  ]
})
export class CreationFormModule { }
