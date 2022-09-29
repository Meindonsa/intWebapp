import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MainRoutes } from "./main.routing";
import { HomeComponent } from "../pages/home/home.component";
import { RouterModule } from "@angular/router";
import { CompaniesComponent } from "../pages/company/companies/companies.component";
import { UsersComponent } from "../pages/user/users/users.component";
import { EmployeesComponent } from "../pages/employee/employees/employees.component";
import { InterventionsComponent } from "../pages/intervention/interventions/interventions.component";
import { RegisterCompanyComponent } from "../pages/company/register-company/register-company.component";
import { EditEmployeeComponent } from "../pages/employee/edit-employee/edit-employee.component";
import { DetailCompanyComponent } from "../pages/company/detail-company/detail-company.component";
import { RegisterEmployeeComponent } from "../pages/employee/register-employee/register-employee.component";
import { DetailEmployeeComponent } from "../pages/employee/detail-employee/detail-employee.component";
import { AddInterventionComponent } from "../pages/intervention/add-intervention/add-intervention.component";

import { DynamicDialogModule } from "primeng/dynamicdialog";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ToastModule } from "primeng/toast";
import { ButtonModule } from "primeng/button";
import { TableModule } from "primeng/table";
import { ConfirmPopupModule } from "primeng/confirmpopup";

@NgModule({
  declarations: [
    HomeComponent,
    CompaniesComponent,
    UsersComponent,
    EmployeesComponent,
    InterventionsComponent,
    RegisterCompanyComponent,
    EditEmployeeComponent,
    DetailCompanyComponent,
    RegisterEmployeeComponent,
    DetailEmployeeComponent,
    AddInterventionComponent,
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
    ConfirmPopupModule,
  ],
})
export class MainModule {}
