import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutes } from './main.routing';
import { HomeComponent } from '../pages/home/home.component';
import { RouterModule } from '@angular/router';
import { CompaniesComponent } from '../pages/company/companies/companies.component';
import { UsersComponent } from '../pages/user/users/users.component';
import { EmployeesComponent } from '../pages/employee/employees/employees.component';
import { InterventionsComponent } from '../pages/intervention/interventions/interventions.component';
import { RegisterCompanyComponent } from '../pages/company/register-company/register-company.component';

import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    HomeComponent,
    CompaniesComponent,
    UsersComponent,
    EmployeesComponent,
    InterventionsComponent,
    RegisterCompanyComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(MainRoutes),
    DynamicDialogModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule,
    ButtonModule,
    TableModule,
  ],
})
export class MainModule {}
