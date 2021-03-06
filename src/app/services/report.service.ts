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

  getInvoice(): Observable<any> {
    this.srvURL  = this.reportServer + '/api/Reports/VersatileandPrecise/Invoice';

    return this.httpClient.get(this.srvURL, {responseType: "blob"});
  }

  getSaving(): Observable<any> {
    this.srvURL  = this.reportServer + '/api/Reports/VersatileandPrecise/FortifyFinancialAllinOneRetirementSavings';

    return this.httpClient.get(this.srvURL, {responseType: "blob"});
  }

  getFinancial(): Observable<any> {
    this.srvURL  = this.reportServer + '/api/Reports/Financial/VarianceAnalysisReport';

    return this.httpClient.get(this.srvURL, {responseType: "blob"});
  }
  getIncome(): Observable<any> {
    this.srvURL  = this.reportServer + '/api/Reports/Demonstration/ComparativeIncomeStatement';

    return this.httpClient.get(this.srvURL, {responseType: "blob"});
  }


}

