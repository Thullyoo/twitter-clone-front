import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import RegisterRequest from '../../features/register/interfaces/RegisterRequest';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private url: string = "http://localhost:8080";

  private HttpClient = inject(HttpClient);

  public onRegister(request: RegisterRequest ){
    this.HttpClient.post(this.url + "/register", request);
  }
  
}
