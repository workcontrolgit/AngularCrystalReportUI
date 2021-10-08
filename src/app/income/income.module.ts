import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { IncomeRoutingModule } from './income-routing.module';
import { IncomeComponent } from './income.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@NgModule({
  imports: [CommonModule, TranslateModule, IncomeRoutingModule, NgxExtendedPdfViewerModule],
  declarations: [IncomeComponent],
})
export class IncomeModule {}
