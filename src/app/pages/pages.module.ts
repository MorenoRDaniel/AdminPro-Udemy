import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';

import { ComponentModule } from '../components/components.module';

@NgModule({
  declarations: [
    DashboardComponent,
    PagesComponent,
    ProgressComponent,
    Graficas1Component,
  ],
  imports: [
    SharedModule,
    PAGES_ROUTES,
    FormsModule,
    ComponentModule
  ],
  exports: [
    DashboardComponent,
    PagesComponent,
    ProgressComponent,
    Graficas1Component
  ],
  providers: []
})
export class PagesModule {}
