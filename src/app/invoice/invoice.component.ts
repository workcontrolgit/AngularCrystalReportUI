import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss'],
})
export class InvoiceComponent implements OnInit {
  pdfSource = 'https://localhost:44369/api/Reports/VersatileandPrecise/Invoice';
  constructor() {}

  ngOnInit() {}
}
