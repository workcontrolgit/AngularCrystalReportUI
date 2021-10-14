import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';

@Component({
  selector: 'app-financial',
  templateUrl: './financial.component.html',
  styleUrls: ['./financial.component.scss'],
})
export class FinancialComponent implements OnInit {
  reportServer: string | null = environment.reportServer;

  // Report Web API URL.
  // You may need to change to the server name/port in environment.ts to match with your environment
  pdfSource = this.reportServer + '/api/Reports/Financial/VarianceAnalysisReport';
  constructor() {}

  ngOnInit() {}
}
