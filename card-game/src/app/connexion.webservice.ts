import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class connexionService{
    
    constructor(private httpClient:HttpClient){

    }
    
    url:string= 'http://localhost:3010/api/login';

    login(name : string,password : string ):Promise<any>{
        
        const body = {
            name: name,
            password: password,
          };


       return new Promise((resolve, reject) =>{
         this.httpClient.post(this.url, body).subscribe({
          next: (response)=>{
            resolve(response);
          },
          error:(error)=>{
            reject(error);
          }
         });

       });
    }
}