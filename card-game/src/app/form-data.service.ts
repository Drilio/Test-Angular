import { Injectable } from '@angular/core';
import { connexionService } from './connexion.webservice';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  constructor( private connexion:connexionService, private router: Router) { }

  private formDataLogin : string = "";
  private formDataPassword : string = '';

  public setFormData(login:string, password:string):void{
    this.formDataLogin= login;
    this.formDataPassword = password;
  }

  public async getLog(){
    try{

      const response= await this.connexion.login(this.formDataLogin, this.formDataPassword);
      console.log(response);
      console.log('TEEEEEEEEEEEEEEEEST')
      localStorage.clear;
      localStorage.setItem('token', response.token);
      this.router.navigate(['/']); 
    }catch(e){
      console.log(e);
    }
  }

  public async createUser(name:string, login:string, password:string){
    const response = await this.connexion.create(name, login, password);
    console.log(response);
  }
}
