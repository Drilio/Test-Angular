import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormDataService } from '../form-data.service';
@Component({
  selector: 'app-connexion-form',
  templateUrl: './connexion-form.component.html',
  styleUrls: ['./connexion-form.component.css']
})
export class ConnexionFormComponent {
  form: FormGroup = new FormGroup({
    login: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private formDataService: FormDataService){}

  onSubmit() {
    const login = this.form.get('login')?.value;
    const password = this.form.get('password')?.value;
    this.formDataService.setFormData(login, password);
    console.log(login, password);
    this.formDataService.getLog();
  }
}
