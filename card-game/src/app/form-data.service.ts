import { Injectable } from '@angular/core';
import { connexionService } from './connexion.webservice';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  constructor( private connexion:connexionService) { }

  private formDataName : string = "";
  private formDataPassword : string = '';

  public setFormData(name:string, password:string):void{
    this.formDataName = name;
    this.formDataPassword = password;
  }

  public async getLog(){
    const response= await this.connexion.login(this.formDataName, this.formDataPassword);
    console.log(response);
    console.log('TEEEEEEEEEEEEEEEEST')
    localStorage.setItem('token', response.token);
  }
}
