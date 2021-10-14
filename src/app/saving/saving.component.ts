import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';


@Component({
  selector: 'app-saving',
  templateUrl: './saving.component.html',
  styleUrls: ['./saving.component.scss'],
})
export class SavingComponent implements OnInit {

  reportServer: string | null = environment.reportServer;

  // Report Web API URL.
  // You may need to change to the server name/port in environment.ts to match with your environment
  pdfSource = this.reportServer + '/api/Reports/VersatileandPrecise/FortifyFinancialAllinOneRetirementSavings';
  constructor() {}

  ngOnInit() {}
}
