import {Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {LayoutComponent} from "./layout/layout.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ComplaintCreateComponent} from "./complaint/complaint-create/complaint-create.component";
import {ComplaintListComponent} from "./complaint/complaint-list/complaint-list.component";
import {DepartmentComponent} from "./department/department.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'complaint/create',
        component: ComplaintCreateComponent,
      },
      {
        path: 'complaint/list',
        component: ComplaintListComponent,
      },
      {
        path: 'department',
        component: DepartmentComponent,
      },
    ]
  }
];
