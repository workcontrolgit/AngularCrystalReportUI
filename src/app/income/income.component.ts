import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss'],
})
export class IncomeComponent implements OnInit {
  reportServer: string | null = environment.reportServer;
  // Report Web API URL.
  // You may need to change to the server name/port in environment.ts to match with your environment
  pdfSource = this.reportServer + '/api/Reports/Demonstration/ComparativeIncomeStatement';
  constructor() {}

  ngOnInit() {}
}
