import {Component, inject} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  private _router: Router = inject(Router);
  loggedUserData: any;

  constructor() {
    const localData = localStorage.getItem('complaintUser');
    if(localData != null) {
      this.loggedUserData = JSON.parse(localData);
    }
  }

  onLogOut() {
    localStorage.removeItem('complaintUser');
    this._router.navigateByUrl('/login');
  }
}
