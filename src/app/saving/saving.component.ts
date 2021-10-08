import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saving',
  templateUrl: './saving.component.html',
  styleUrls: ['./saving.component.scss'],
})
export class SavingComponent implements OnInit {

  // Report Web API URL.
  // You may need to change to the server name/port to match with your environment
  pdfSource = 'https://localhost:44369/api/Reports/VersatileandPrecise/FortifyFinancialAllinOneRetirementSavings';
  constructor() {}

  ngOnInit() {}
}
