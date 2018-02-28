import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GraficoDonaComponent } from './grafico-dona/grafico-dona.component';
import { IncrementadorComponent } from './incrementador/incrementador.component';
import { ChartsModule } from 'ng2-charts';
@NgModule({
  declarations: [
    GraficoDonaComponent,
    IncrementadorComponent,
  ],
  imports: [
    FormsModule,
    ChartsModule
  ],
  exports: [
    GraficoDonaComponent,
    IncrementadorComponent,
  ],
  providers: []
})
export class ComponentModule {}
