import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { SettingsComponent } from './settings.component';
import { SettingsRoutingModule } from './settings-routing.module';

@NgModule({
  imports: [
    SettingsRoutingModule,
    ChartsModule,
    BsDropdownModule
  ],
  declarations: [ SettingsComponent ]
})
export class SettingsModule { }
