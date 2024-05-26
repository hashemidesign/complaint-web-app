import {Component, inject} from '@angular/core';
import {AuthService} from "./auth.service";
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  isLoginVisible: boolean = true;
  authService: AuthService = inject(AuthService)
  router: Router = inject(Router);

  registerObj: any = {
    "userId": 0,
    "userName": "",
    "emailId": "",
    "fullName": "",
    "role": "string",
    "createdDate": new Date(),
    "password": "",
    "projectName": ""
  }

  loginObj: any  = {
    "userName": "",
    "password": ""
  }

  SwitchLogin() {
    this.isLoginVisible = !this.isLoginVisible;
  }

  onRegister() {
    this.authService.register(this.registerObj).subscribe({
      next: (data: any) => {
        if (data.result) {
          localStorage.setItem('complaintUser', JSON.stringify(data.data));
          this.router.navigateByUrl('/dashboard');
        }
      },
      error: err => {
        console.log(err);
      }
    });
  }

  onLogin() {
    this.authService.login(this.loginObj).subscribe({
      next: (data: any) => {
        if (data.result) {
          localStorage.setItem('complaintUser', JSON.stringify(data.data));
          this.router.navigateByUrl('/dashboard');
        }
      },
      error: err => {
        console.log(err);
      }
    });
  }
}
