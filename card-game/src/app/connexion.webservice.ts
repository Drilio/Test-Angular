import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class connexionService{
    
    constructor(private httpClient:HttpClient){

    }
    
    urlLogin:string= 'http://localhost:3010/api/login';
    urlCreate:string = 'http://localhost:3010/api/profiles';
    login(login : string,password : string ):Promise<any>{
        
        const body = {
            login: login,
            password: password,
          };


       return new Promise((resolve, reject) =>{
         this.httpClient.post(this.urlLogin, body).subscribe({
          next: (response)=>{
            resolve(response);
          },
          error:(error)=>{
            reject(error);
          }
         });

       });
    }

    create(name:string, password:string, login:string){
      const body ={
        name:name,
        password:password,
        login:login
      }

      return new Promise((resolve, reject)=>{
        this.httpClient.put(this.urlCreate, body).subscribe({
          next:(response)=>{
            resolve(response);
          },
          error:(error)=>{
            reject(error);
          }
        })

      })
    }
}