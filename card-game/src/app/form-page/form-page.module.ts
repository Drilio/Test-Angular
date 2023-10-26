import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormPageComponent } from './form-page.component';
import { ConnexionFormComponent } from '../connexion-form/connexion-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreationFormModule } from '../creation-form/creation-form.module';



@NgModule({
  declarations: [
    FormPageComponent,
    ConnexionFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CreationFormModule
  ]
})
export class FormPageModule { }
