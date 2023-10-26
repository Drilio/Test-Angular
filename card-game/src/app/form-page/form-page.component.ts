import { Component } from '@angular/core';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css']
})
export class FormPageComponent {
  accountCreated!:boolean;

  onClick(hasAccount:boolean){
    if(!hasAccount){
      this.accountCreated = false;
      console.log('no');
    }else{
      this.accountCreated = true;
      console.log('yes');
    }
  }

}
