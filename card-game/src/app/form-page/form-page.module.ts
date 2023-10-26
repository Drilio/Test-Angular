import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormPageComponent } from './form-page.component';
import { ConnexionFormComponent } from '../connexion-form/connexion-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreationFormComponent } from '../creation-form/creation-form.component';



@NgModule({
  declarations: [
    FormPageComponent,
    ConnexionFormComponent,
    CreationFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class FormPageModule { }
