import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DetailCompanyComponent } from '../detail-company/detail-company.component';
import { RegisterCompanyComponent } from '../register-company/register-company.component';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss'],
})
export class CompaniesComponent implements OnInit {
  ref: DynamicDialogRef;
  companiesList: any;
  first = 0;
  rows = 10;

  constructor(
    private dialogService: DialogService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getCompanies();
  }

  addCompany() {
    this.ref = this.dialogService.open(RegisterCompanyComponent, {
      header: '',
      width: '60%',
    });

    this.ref.onClose.subscribe((response) => {
      if (response) {
        this.messageService.add({
          severity: 'success',
          summary: 'Companie Ajouté !!!',
        });
        // TODO : reload table
        this.ngOnInit();
      }
    });
  }

  details(comapny: any) {
    this.dialogService.open(DetailCompanyComponent, {
      header: 'Détails de la companie',
      width: '40%',
      data: comapny,
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
    return this.companiesList
      ? this.first === this.companiesList.length - this.rows
      : true;
  }

  isFirstPage(): boolean {
    return this.companiesList ? this.first === 0 : true;
  }
  getCompanies() {
    this.companiesList = [
      {
        id: 1,
        name: 'ossas-it@gmail.com',
        email: 'ossas-it@gmail.com',
        phone: '+33 4598 238 745',
        location: 'Champs Elysée',
      },
      {
        id: 2,
        name: 'ossas-it@gmail.com',
        email: 'ossas-it@gmail.com',
        phone: '+33 4598 238 745',
        location: 'Champs Elysée',
      },
      {
        id: 3,
        name: 'ossas-it@gmail.com',
        email: 'ossas-it@gmail.com',
        phone: '+33 4598 238 745',
        location: 'Champs Elysée',
      },
      {
        id: 4,
        name: 'ossas-it@gmail.com',
        email: 'ossas-it@gmail.com',
        phone: '+33 4598 238 745',
        location: 'Champs Elysée',
      },
      {
        id: 5,
        name: 'ossas-it@gmail.com',
        email: 'ossas-it@gmail.com',
        phone: '+33 4598 238 745',
        location: 'Champs Elysée',
      },
    ];
  }
}
