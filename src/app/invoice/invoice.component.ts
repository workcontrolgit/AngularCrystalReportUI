import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss'],
})
export class InvoiceComponent implements OnInit {
  // Report Web API URL.
  // You may need to change to the server name/port to match with your environment
  pdfSource = 'https://localhost:44369/api/Reports/VersatileandPrecise/Invoice';
  constructor() {}

  ngOnInit() {}
}
