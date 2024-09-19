import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import JwtResponse from '../../features/login/interfaces/JwtResponse';
import LoginRequest from '../../features/login/interfaces/LoginRequest';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url: string = "http://localhost:8080";

  private HttpClient = inject(HttpClient);

  public postLogin(request: LoginRequest){

    const encodedCredentials = btoa(`${request.nick}:${request.password}`);

    const headerOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Basic ' + encodedCredentials ,
      })
    }
    return this.HttpClient.post<JwtResponse>(this.url + "/login", null, headerOptions);
    
      
  }
}
