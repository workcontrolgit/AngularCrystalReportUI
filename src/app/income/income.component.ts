import { Component, OnInit } from '@angular/core';
import {ReportService} from '@app/services/report.service';


@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss'],
})
export class IncomeComponent implements OnInit {
  pdfSource: any;
  constructor(private reportService: ReportService) {}


  ngOnInit() {
    this.reportService.getIncome()
    .subscribe(data => {this.pdfSource = data;
    });
  }
}
