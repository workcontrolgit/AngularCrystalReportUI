import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { InvoiceRoutingModule } from './invoice-routing.module';
import { InvoiceComponent } from './invoice.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@NgModule({
  imports: [CommonModule, TranslateModule, InvoiceRoutingModule, NgxExtendedPdfViewerModule],
  declarations: [InvoiceComponent],
})
export class InvoiceModule {}
