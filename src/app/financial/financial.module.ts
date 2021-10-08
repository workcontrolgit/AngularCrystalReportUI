import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { FinancialRoutingModule } from './financial-routing.module';
import { FinancialComponent } from './financial.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@NgModule({
  imports: [CommonModule, TranslateModule, FinancialRoutingModule, NgxExtendedPdfViewerModule],
  declarations: [FinancialComponent],
})
export class FinancialModule {}
