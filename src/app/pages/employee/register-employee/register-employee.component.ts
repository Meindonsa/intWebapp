import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MessageService } from "primeng/api";
import { DynamicDialogRef } from "primeng/dynamicdialog";

@Component({
  selector: "app-register-employee",
  templateUrl: "./register-employee.component.html",
  styleUrls: ["./register-employee.component.scss"],
})
export class RegisterEmployeeComponent implements OnInit {
  addEmployeeForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    public ref: DynamicDialogRef
  ) {
    this.addEmployeeForm = formBuilder.group({
      lastName: ["", Validators.required],
      firstName: ["", Validators.required],
      email: ["", Validators.email],
      phone: ["", Validators.minLength(8)],
      address: ["", Validators.required],
    });
  }

  ngOnInit(): void {}

  addEployee() {
    this.messageService.add({
      severity: "success",
      summary: "Employé ajouté !!!",
    });
    this.ref.close(true);
  }
}
