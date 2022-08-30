import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-detail-company',
  templateUrl: './detail-company.component.html',
  styleUrls: ['./detail-company.component.scss'],
})
export class DetailCompanyComponent implements OnInit {
  comapny: any;

  constructor(public config: DynamicDialogConfig) {}

  ngOnInit(): void {
    this.comapny = this.config.data;
  }
}
