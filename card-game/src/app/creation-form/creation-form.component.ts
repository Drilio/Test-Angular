import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormDataService } from '../form-data.service';

@Component({
  selector: 'app-creation-form',
  templateUrl: './creation-form.component.html',
  styleUrls: ['./creation-form.component.css']
})


export class CreationFormComponent {
  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    password: new FormControl(''),
    login: new FormControl('')
  })

  constructor(private formDataService: FormDataService){}

  onSubmit(){
    const name = this.form.get('name')?.value;
    const password = this.form.get('password')?.value;
    const login = this.form.get('login')?.value;

    this.formDataService.createUser(name, password, login);

  }

}
