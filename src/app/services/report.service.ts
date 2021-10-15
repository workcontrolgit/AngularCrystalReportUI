import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';



@Injectable({
  providedIn: 'root'
})
export class ReportService  {

  reportServer: string | null = environment.reportServer;
  srvURL: string = "";

  constructor(private httpClient: HttpClient) { }

  getInvoiceReport(): Observable<any> {
    this.srvURL  = this.reportServer + '/api/Reports/VersatileandPrecise/Invoice';

    return this.httpClient.get(this.srvURL, {responseType: "blob"});
  }

}

