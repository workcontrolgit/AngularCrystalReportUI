import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss'],
})
export class IncomeComponent implements OnInit {
  // Report Web API URL.
  // You may need to change to the server name/port to match with your environment
  pdfSource = 'https://localhost:44369/api/Reports/Demonstration/ComparativeIncomeStatement';
  constructor() {}

  ngOnInit() {}
}
