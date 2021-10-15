import { Component, OnInit } from '@angular/core';
import {ReportService} from '@app/services/report.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss'],
})
export class InvoiceComponent implements OnInit {
  pdfSource: any;
  constructor(private reportService: ReportService) {}


  ngOnInit() {
    this.reportService.getInvoice()
    .subscribe(data => {this.pdfSource = data;
    });
  }
}
