import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';
import {ReportService} from '@app/services/report.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss'],
})
export class InvoiceComponent implements OnInit {
  reportServer: string | null = environment.reportServer;
  pdfSource: any;
  // Report Web API URL.
  // You may need to change to the server name/port in environment.ts to match with your environment
  //pdfSource = this.reportServer + '/api/Reports/VersatileandPrecise/Invoice';
  constructor(private reportService: ReportService) {}

  ngOnInit() {
    this.reportService.getInvoiceReport()
    .subscribe(data => {this.pdfSource = data;
    });
  }
}
