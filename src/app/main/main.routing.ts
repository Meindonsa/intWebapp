import { Routes, RouterModule } from '@angular/router';
import { CompaniesComponent } from '../pages/company/companies/companies.component';
import { EmployeesComponent } from '../pages/employee/employees/employees.component';
import { HomeComponent } from '../pages/home/home.component';
import { InterventionsComponent } from '../pages/intervention/interventions/interventions.component';
import { UsersComponent } from '../pages/user/users/users.component';

export const MainRoutes: Routes = [
  { path: 'home', title: 'Dashboard', component: HomeComponent },
  { path: 'companies', title: 'Companies', component: CompaniesComponent },
  { path: 'employees', title: 'Employés', component: EmployeesComponent },
  {
    path: 'interventions',
    title: 'Interventions',
    component: InterventionsComponent,
  },
];
