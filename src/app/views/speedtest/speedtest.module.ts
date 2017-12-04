import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { LiveSpeedtestComponent } from './live-speedtest.component';
import { SpeetestComponent } from './speedtest.component';
import { SpeedtestRoutingModule } from './speedtest-routing.module';

@NgModule({
  imports: [
    SpeedtestRoutingModule,
    ChartsModule,
    BsDropdownModule
  ],
  declarations: [ SpeetestComponent, LiveSpeedtestComponent ]
})
export class SpeetestModule { }
