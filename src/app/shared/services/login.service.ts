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

  private postLogin(request: LoginRequest){

    let jwt: JwtResponse = {
      acessToken: '',
      expiresAt: 0
    }

    const encodedCredentials = btoa(`${request.nick}:${request.password}`);

    const headerOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Basic ' + encodedCredentials;
      })
    }
    this.HttpClient.post<JwtResponse>(this.url + "/login", null, headerOptions)
    .subscribe({
      next: (res) => {
        jwt.acessToken = res.acessToken;
        jwt.expiresAt = res.expiresAt;
        return jwt
      },
      error: (error) =>{
        console.log(error)
      }
      
    })
      
  }
}
