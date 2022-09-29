import { AddInterventionComponent } from "./../add-intervention/add-intervention.component";
import { MessageService } from "primeng/api";
import { DialogService } from "primeng/dynamicdialog";
import { DynamicDialogRef } from "primeng/dynamicdialog";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-interventions",
  templateUrl: "./interventions.component.html",
  styleUrls: ["./interventions.component.scss"],
})
export class InterventionsComponent implements OnInit {
  ref: DynamicDialogRef;
  interventionList: any;
  first = 0;
  rows = 10;

  constructor(
    private dialogService: DialogService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  addIntervention() {
    this.ref = this.dialogService.open(AddInterventionComponent, {
      header: "Ajout d'intervention",
      width: "60%",
    });
  }

  details(intervention: any) {
    // this.dialogService.open(DetailEmployeeComponent, {
    //   header: "Détails de la companie",
    //   width: "40%",
    //   data: comapny,
    // });
  }

  edit(intervention: any) {
    // this.dialogService.open(EditEmployeeComponent, {
    //   header: employee.lastName + " " + employee.firstName,
    //   width: "60%",
    //   data: employee,
    // });
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
    return this.interventionList
      ? this.first === this.interventionList.length - this.rows
      : true;
  }

  isFirstPage(): boolean {
    return this.interventionList ? this.first === 0 : true;
  }
  getEmployees() {
    this.interventionList = [
      {
        id: 1,
        title: "Ossas",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        date: "25/03/2023",
        houre: "10:30",
        client: {
          id: 1,
          name: "ossas",
        },
        status: "en cours",
      },
      {
        id: 2,
        title: "Ossas",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        date: "25/03/2023",
        houre: "10:30",
        client: {
          id: 10,
          name: "ossas",
        },
        status: "en cours",
      },
      {
        id: 3,
        title: "Ossas",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        date: "25/03/2023",
        houre: "10:30",
        client: {
          id: 5,
          name: "ossas",
        },
        status: "en cours",
      },
      {
        id: 4,
        title: "Ossas",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        date: "25/03/2023",
        houre: "10:30",
        client: {
          id: 1,
          name: "ossas",
        },
        status: "en cours",
      },
      {
        id: 5,
        title: "Ossas",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        date: "25/03/2023",
        houre: "10:30",
        client: {
          id: 3,
          name: "ossas",
        },
        status: "en cours",
      },
    ];
  }
}
