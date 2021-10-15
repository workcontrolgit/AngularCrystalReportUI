import { Component, OnInit } from '@angular/core';
import {ReportService} from '@app/services/report.service';


@Component({
  selector: 'app-financial',
  templateUrl: './financial.component.html',
  styleUrls: ['./financial.component.scss'],
})
export class FinancialComponent implements OnInit {
  pdfSource: any;
  constructor(private reportService: ReportService) {}


  ngOnInit() {
    this.reportService.getFinancial()
    .subscribe(data => {this.pdfSource = data;
    });
  }
}
