import { EditEmployeeComponent } from "./../edit-employee/edit-employee.component";
import { Component, OnInit } from "@angular/core";
import { MessageService } from "primeng/api";
import { DialogService, DynamicDialogRef } from "primeng/dynamicdialog";
import { DetailEmployeeComponent } from "../detail-employee/detail-employee.component";
import { RegisterEmployeeComponent } from "../register-employee/register-employee.component";

@Component({
  selector: "app-employees",
  templateUrl: "./employees.component.html",
  styleUrls: ["./employees.component.scss"],
})
export class EmployeesComponent implements OnInit {
  ref: DynamicDialogRef;
  employeesList: any;
  first = 0;
  rows = 10;

  constructor(
    private dialogService: DialogService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  addEmployee() {
    this.ref = this.dialogService.open(RegisterEmployeeComponent, {
      header: "",
      width: "60%",
    });
  }

  details(comapny: any) {
    this.dialogService.open(DetailEmployeeComponent, {
      header: "Détails de la companie",
      width: "40%",
      data: comapny,
    });
  }

  editEmployee(employee: any) {
    this.dialogService.open(EditEmployeeComponent, {
      header: employee.lastName + " " + employee.firstName,
      width: "60%",
      data: employee,
    });
  }

  next() {
    this.first = this.first + this.rows;
  }
  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.employeesList
      ? this.first === this.employeesList.length - this.rows
      : true;
  }

  isFirstPage(): boolean {
    return this.employeesList ? this.first === 0 : true;
  }
  getEmployees() {
    this.employeesList = [
      {
        id: 1,
        lastName: "Ossas",
        firstName: "IT",
        email: "ossas-it@gmail.com",
        phone: "+33 4598 238 745",
        address: "Champs Elysée",
      },
      {
        id: 2,
        lastName: "Ossas",
        firstName: "It",
        email: "ossas-it@gmail.com",
        phone: "+33 4598 238 745",
        address: "Champs Elysée",
      },
      {
        id: 3,
        lastName: "Ossas",
        firstName: "It",
        email: "ossas-it@gmail.com",
        phone: "+33 4598 238 745",
        address: "Champs Elysée",
      },
      {
        id: 4,
        lastName: "Ossas",
        firstName: "It",
        email: "ossas-it@gmail.com",
        phone: "+33 4598 238 745",
        address: "Champs Elysée",
      },
      {
        id: 5,
        lastName: "Ossas",
        firstName: "It",
        email: "ossas-it@gmail.com",
        phone: "+33 4598 238 745",
        address: "Champs Elysée",
      },
    ];
  }
}
