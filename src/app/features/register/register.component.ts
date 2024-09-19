import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RegisterService } from '../../shared/services/register.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
    
  private registerService = inject(RegisterService);
  
  private formBuilder = inject(FormBuilder);

  protected form = new FormGroup({
    email: new FormControl<string>("", {validators: Validators.required, nonNullable: true}),
    name: new FormControl<string>("", {validators: Validators.required, nonNullable: true}),
    nickname: new FormControl<string>("", {validators: Validators.required, nonNullable: true}),
    password: new FormControl<string>("", {validators: Validators.required, nonNullable: true})
  })
  
  public onRegister(event: Event){
    event.preventDefault();
    this.registerService.onRegister({
      email: this.form.controls.email.value ,
      password: this.form.controls.password.value,
      name: this.form.controls.name.value,
      nickname: this.form.controls.nickname.value 
    })
    .subscribe({
      next: res =>{
        console.log("Usuário criado");
      },
      error: error =>{
        console.error(error);
      }
    })
  }
}
