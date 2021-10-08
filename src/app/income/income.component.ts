import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss'],
})
export class IncomeComponent implements OnInit {
  pdfSource = 'https://localhost:44369/api/Reports/Demonstration/ComparativeIncomeStatement';
  constructor() {}

  ngOnInit() {}
}
