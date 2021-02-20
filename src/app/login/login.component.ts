import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../service/login.service';

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html'
  })

export class LoginFormComponent implements OnInit{
    loginForm: FormGroup;
    loading = false;
    submitted = false;

    constructor(private formBuilder: FormBuilder, private loginService: LoginService) {}

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    get f() { return this.loginForm.controls }

    onSubmit() {
        this.submitted = true;
        
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        
        this.loginService.login(this.f.username.value, this.f.password.value)
    }

}