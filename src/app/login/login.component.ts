import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin = new FormGroup({
    email : new FormControl(null, Validators.compose([Validators.email, Validators.required])),
    password : new FormControl(null, Validators.required),
  })
  constructor(private api: LoginService, private router: Router, private msg :MessageService) { }

  ngOnInit() {
  }

  login(form: FormGroup){
    this.api.login(form.value).subscribe(resp=>{
      this.router.navigate(['home'])
    }, error =>{
      this.showError(error.error.error)
    })
  }

  
  showSuccess(m: string) {
    this.msg.add({severity:'success', summary: 'Exito!', detail: m, life:3000});
  }
  showError(m: string) {
    this.msg.add({severity:'error', summary: 'Error!', detail: m, life:3000});
  } 
}
