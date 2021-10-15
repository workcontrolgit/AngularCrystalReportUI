import { Component, OnInit } from '@angular/core';
import {ReportService} from '@app/services/report.service';



@Component({
  selector: 'app-saving',
  templateUrl: './saving.component.html',
  styleUrls: ['./saving.component.scss'],
})
export class SavingComponent implements OnInit {

  pdfSource: any;
  constructor(private reportService: ReportService) {}


  ngOnInit() {
    this.reportService.getSaving()
    .subscribe(data => {this.pdfSource = data;
    });
  }
}
