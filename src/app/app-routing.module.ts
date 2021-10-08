import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Shell } from '@app/shell/shell.service';

const routes: Routes = [
  Shell.childRoutes([{ path: 'about', loadChildren: () => import('./about/about.module').then((m) => m.AboutModule) }]),
  Shell.childRoutes([
    { path: 'invoice', loadChildren: () => import('./invoice/invoice.module').then((m) => m.InvoiceModule) },
  ]),
  Shell.childRoutes([
    { path: 'financial', loadChildren: () => import('./financial/financial.module').then((m) => m.FinancialModule) },
  ]),
  Shell.childRoutes([
    { path: 'income', loadChildren: () => import('./income/income.module').then((m) => m.IncomeModule) },
  ]),
  Shell.childRoutes([
    { path: 'saving', loadChildren: () => import('./saving/saving.module').then((m) => m.SavingModule) },
  ]),
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
