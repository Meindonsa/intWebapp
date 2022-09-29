import { DynamicDialogConfig } from "primeng/dynamicdialog";
import { DynamicDialogRef } from "primeng/dynamicdialog";
import { ConfirmationService, MessageService } from "primeng/api";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-edit-employee",
  templateUrl: "./edit-employee.component.html",
  styleUrls: ["./edit-employee.component.scss"],
})
export class EditEmployeeComponent implements OnInit {
  editEmployeeForm: FormGroup;
  employee: any;

  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private confirmationService: ConfirmationService
  ) {
    this.employee = this.config.data;
    this.editEmployeeForm = formBuilder.group({
      lastName: [this.employee.lastName, Validators.required],
      firstName: [this.employee.firstName, Validators.required],
      email: [this.employee.email, Validators.email],
      phone: [this.employee.phone, Validators.minLength(8)],
      address: [this.employee.address, Validators.required],
    });
  }

  ngOnInit(): void {}

  editEployee() {
    this.messageService.add({
      severity: "success",
      summary: "Employé ajouté !!!",
    });
    this.ref.close(true);
  }

  confirm(event: Event) {
    this.confirmationService.confirm({
      target: event.target,
      message:
        "Voulez-vous vraiment supprimer le compte de " + this.employee.lastName,
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.messageService.add({
          severity: "info",
          summary: "Confirmed",
          detail: "You have accepted",
        });
      },
      reject: () => {
        this.messageService.add({
          severity: "error",
          summary: "Rejected",
          detail: "You have rejected",
        });
      },
    });
  }
}
