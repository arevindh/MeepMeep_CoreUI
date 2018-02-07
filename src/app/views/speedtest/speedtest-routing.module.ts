import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { SpeetestComponent } from './speedtest.component';
import { LiveSpeedtestComponent } from './live-speedtest.component';

const routes: Routes = [
  {
    path: '',
    component: SpeetestComponent,
    data: {
      title: 'History'
    },
    children :[
      {
        path: 'history',
        component : SpeetestComponent
      }
    ]
    
  },
  {
    path: '',
    component: LiveSpeedtestComponent,
    data: {
      title: 'Test Now'
    },
    children :[
      {
        path: 'live',
        component : LiveSpeedtestComponent
      }
    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpeedtestRoutingModule {}
