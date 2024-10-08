import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from '../../shared/services/login.service';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import JwtResponse from './interfaces/JwtResponse';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  private loginService = inject(LoginService);

  private formBuilder = inject(FormBuilder);

  private router = inject(Router);

  protected form = this.formBuilder.group({
    username: new FormControl<string>("", {validators: Validators.required, nonNullable: true}),
    password: new FormControl<string>("", {validators: Validators.required, nonNullable: true})
  })

  onLogin(event: Event){
    event.preventDefault();
    let jwt: JwtResponse = {
      acessToken: "",
      expiresAt: 0
    }

    this.loginService.postLogin({nick: this.form.controls.username.value, password: this.form.controls.password.value}) 
    .subscribe({
      next: (res) => {
        jwt.acessToken = res.acessToken;
        jwt.expiresAt = res.expiresAt;
        
        localStorage.setItem("authToken", jwt.acessToken);
        this.router.navigateByUrl("/home").then(success =>{
          if (!success) {
            console.log("Navegação falhou.");
          }
        }).catch(err => {
          console.log("Erro ao navegar: ", err);
        });
      },
      error: (error) =>{
        console.log(error)
      }
      
    })
  }
}
