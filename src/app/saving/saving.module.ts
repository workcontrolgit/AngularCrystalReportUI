import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SavingRoutingModule } from './saving-routing.module';
import { SavingComponent } from './saving.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@NgModule({
  imports: [CommonModule, TranslateModule, SavingRoutingModule, NgxExtendedPdfViewerModule],
  declarations: [SavingComponent],
})
export class SavingModule {}
