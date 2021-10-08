import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-financial',
  templateUrl: './financial.component.html',
  styleUrls: ['./financial.component.scss'],
})
export class FinancialComponent implements OnInit {
  pdfSource = 'https://localhost:44369/api/Reports/Financial/VarianceAnalysisReport';
  constructor() {}

  ngOnInit() {}
}
