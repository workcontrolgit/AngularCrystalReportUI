import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  quote: string | undefined;
  isLoading = false;
  //pdfSource =  "https://localhost:44369/api/Reports/VersatileandPrecise/Invoice";

  pdfSource = 'https://localhost:44369/api/Reports/Demonstration/ComparativeIncomeStatement';

  constructor() {}

  ngOnInit() {}
}
