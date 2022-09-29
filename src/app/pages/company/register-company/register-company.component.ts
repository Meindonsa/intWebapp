import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MessageService } from "primeng/api";
import { DynamicDialogConfig, DynamicDialogRef } from "primeng/dynamicdialog";

@Component({
  selector: "app-register-company",
  templateUrl: "./register-company.component.html",
  styleUrls: ["./register-company.component.scss"],
})
export class RegisterCompanyComponent implements OnInit {
  addCompanyForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {
    this.addCompanyForm = formBuilder.group({
      name: ["", Validators.required],
      email: ["", Validators.email],
      phone: ["", Validators.minLength(8)],
      rccm: ["", Validators.required],
      location: ["", Validators.required],
      logo: ["", Validators.required],
    });
  }

  ngOnInit(): void {}

  addCompany() {
    this.ref.close(true);
    // this.messageService.add({
    //   severity: 'success',
    //   summary: 'Companie Ajouté !!',
    // });
  }
}
