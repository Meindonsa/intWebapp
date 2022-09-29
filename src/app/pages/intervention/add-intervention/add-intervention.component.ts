import { FormGroup, Validators } from "@angular/forms";
import { DynamicDialogRef } from "primeng/dynamicdialog";
import { MessageService } from "primeng/api";
import { FormBuilder } from "@angular/forms";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-add-intervention",
  templateUrl: "./add-intervention.component.html",
  styleUrls: ["./add-intervention.component.scss"],
})
export class AddInterventionComponent implements OnInit {
  addInterventionForm: FormGroup;
  agentList: any;
  clientList: any;

  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    public ref: DynamicDialogRef
  ) {
    this.addInterventionForm = formBuilder.group({
      title: ["", [Validators.required, Validators.minLength(3)]],
      description: ["", [Validators.required, Validators.minLength(5)]],
      date: ["", Validators.required],
      houre: ["", Validators.required],
      agents: ["", Validators.required],
      client: ["", Validators.required],
    });
  }

  ngOnInit(): void {
    this.getAgents();
    this.getClient();
  }
  addIntervention() {
    this.messageService.add({
      severity: "success",
      summary: "Intervention créée",
    });
    this.ref.close(true);
  }

  getClient() {
    this.clientList = [
      {
        id: 1,
        name: "ossas",
      },
      {
        id: 2,
        name: "sljpro",
      },
    ];
  }
  getAgents() {
    this.agentList = [
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
