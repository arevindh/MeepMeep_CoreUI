import { NgModule } from '@angular/core';


import { LoginComponent } from './login.component';

import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  imports: [ AuthRoutingModule ],
  declarations: [
    LoginComponent
  ]
})
export class AuthModule { }
